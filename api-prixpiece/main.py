import site_source

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

import time
import concurrent.futures

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000', 'https://refco.miladz.eu'],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

scrap_methods = {'jc': 'JohnCraddock',
                 'sf': 'SeriesForever',
                 'lp': 'LRParts',
                 'ls': 'LandService',
                 'bol': 'BestOfLand',
                 'pad': 'PaddockSpares',
                 'rp': 'RoverParts'
                 }


def Change(devise):
    import requests

    reqUrl = f'https://query1.finance.yahoo.com/v7/finance/quote?symbols={devise}=X'

    headersList = {
        'User-agent': 'Mozilla/5.0'
    }

    response = requests.request(
        "GET", reqUrl, data="", headers=headersList)

    return response.json()['quoteResponse']['result'][0]['regularMarketPrice'] if response.status_code == 200 else 1


def get_scrap_function(scrap_function, ref, timeout=10):
    # eval(f'{func}(request["ref"])')
    func = f'site_source.{scrap_function}'
    return eval(f'{func}(ref)')


def get_scrap_data(reference, sites):
    data = []

    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = []
        for id, name in scrap_methods.items():
            if (id in sites):
                futures.append(executor.submit(
                    get_scrap_function, scrap_function=name, ref=reference))
        for future in concurrent.futures.as_completed(futures):
            data.extend(future.result())

    return data


@app.post("/api")
async def root(info: Request):
    # Start
    start = time.perf_counter()

    request = await info.json()

    change = {'EURGBP': Change('EURGBP')}
    change['GBPEUR'] = Change('GBPEUR')

    data = get_scrap_data(reference=request['ref'], sites=request['sites'])

    finish = time.perf_counter()
    timescore = round(finish-start, 2)
    total = len(data)

    print(
        f"Ref => {request['ref']} ({total} resultat) - {timescore} sec")

    return {'ref': request['ref'],
            'score': total,
            'change':  change,
            'time': timescore,
            'site': data
            }
