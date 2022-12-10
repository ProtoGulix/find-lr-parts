import site_source

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000']
)

sites_catalogue = {'jc': 'JohnCraddock',
                   'sf': 'SeriesForever',
                   'lp': 'LRParts',
                   'ls': 'LandService',
                   'bol': 'BestOfLand',
                   'pad': 'PaddockSpares'
                   }


@app.get("/scrap/")
async def root(ref: str):

    jc = site_source.JohnCraddock(ref)
    data = list(jc)
    sf = site_source.SeriesForever(ref)
    data.extend(iter(sf))
    lp = site_source.LRParts(ref)
    data.extend(iter(lp))
    ls = site_source.LandService(ref)
    data.extend(iter(ls))
    bol = site_source.BestOfLand(ref)
    data.extend(iter(bol))
    pad = site_source.PaddockSpares(ref)
    data.extend(iter(pad))

    total = len(data)

    return {'ref': f'{ref}',
            'score': total,
            'site': data
            }


@app.get("/change/")
async def taux():
    import requests

    reqUrl = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=GBPEUR=X"

    headersList = {
        'User-agent': 'Mozilla/5.0'
    }

    response = requests.request(
        "GET", reqUrl, data="", headers=headersList)

    return response.json()['quoteResponse']['result'][0]['regularMarketPrice'] if response.status_code == 200 else 1
