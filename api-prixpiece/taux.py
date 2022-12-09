import requests


def GetTaux():

    reqUrl = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=GBPEUR=X"

    headersList = {
        'User-agent': 'Mozilla/5.0'
    }

    response = requests.request(
        "GET", reqUrl, data="", headers=headersList)

    return response.json()['quoteResponse']['result'][0]['regularMarketPrice'] if response.status_code == 200 else 1

print(GetTaux())