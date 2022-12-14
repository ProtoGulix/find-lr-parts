import site_source

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000', 'https://refco.miladz.eu'],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

sites_catalogue = {'jc': 'JohnCraddock',
                   'sf': 'SeriesForever',
                   'lp': 'LRParts',
                   'ls': 'LandService',
                   'bol': 'BestOfLand',
                   'pad': 'PaddockSpares'
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


@app.post("/api")
async def root(info: Request):

    request = await info.json()

    change = {'EURGBP': Change('EURGBP')}
    change['GBPEUR'] = Change('GBPEUR')

    data = []

    for key, val in sites_catalogue.items():
        if (key in request['sites']):

            func = f'site_source.{val}'
            data.extend(iter(eval(f'{func}(request["ref"])')))

    total = len(data)

    print(f"Ref => {request['ref']} ({total} resultat)")

    return {'ref': f"{request['ref']}",
            'score': total,
            'change':  change,
            'site': data
            }
