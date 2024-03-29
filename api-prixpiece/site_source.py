import json
from requests.exceptions import HTTPError


def JohnCraddock(ref):
    import requests
    import regex
    import json
    from bs4 import BeautifulSoup

    def extracted_from_JohnCraddock_42(spare, find, i):
        find[i]['ref'] = str(spare['id'])
        find[i]['name'] = spare['name']
        find[i]['price'] = spare['price']
        find[i]['devise'] = 'GBP'
        find[i]['inc_vat'] = False
        find[i]['manufacturer'] = spare['brand']
        find[i]['source'] = 'jc'

    site = 'https://www.johncraddockltd.co.uk'
    url = f"{site}/_api/search.php?q={ref}"

    resp = requests.get(url)
    if resp.status_code == 200:

        r = resp.content.decode('UTF-8')

        """
        Recupération du lien HTML
        """
        soup = BeautifulSoup(r, "html.parser")
        find = []

        find.extend({"link": f"{site}{link.get('href')}"}
                    for link in soup.findAll('a') if link.get_text() == 'View')

        """
        Recupération des donnée dans le JavaScript... Plus facile ^^
        """
        pattern = regex.compile(r'\{(?:[^{}]|(?R))*\}')  # REGEX du JSON
        json_find = pattern.findall(r)  # Recherche du JSON dans le code Html

        if len(json_find) > 0:

            json_resp = json.loads(json_find[0])

            i = 0

            for spare in json_resp['ecommerce']['impressions']:
                if ' Use ' in (" " + spare['name'] + " "):
                    del find[i]
                else:
                    extracted_from_JohnCraddock_42(spare, find, i)
                i = i + 1

        return find


def SeriesForever(ref):
    import requests
    from requests.structures import CaseInsensitiveDict
    from bs4 import BeautifulSoup
    import re

    def GetValue(html, value):
        from bs4 import BeautifulSoup

        soup = BeautifulSoup(str(html), "html.parser")

        v = soup.findAll('div', {'class': value})
        if (len(v) > 0):

            r = re.search('>(.*?)<', str(v[0]), re.IGNORECASE)
            if r:
                val = r.group(1)
                return val

    url = 'https://seriesforever.com/fr/module/searchsuggestions/default?action=get_suggestions'

    headers = CaseInsensitiveDict()
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    data = f"query={ref}&action=get_suggestions"

    try:
        resp = requests.post(url, headers=headers, data=data)

        if resp.status_code == 200:

            r = resp.content.decode('UTF-8')

            soup = BeautifulSoup(r, "html.parser")
            find = []
            for link in soup.findAll('a'):

                if link.get('href') != '#' and GetValue(str(link), 'reference') == ref:
                    out = {}

                    price = GetValue(str(link), 'price')[:-2]

                    out['price'] = float(price.replace(',', '.'))
                    out['name'] = GetValue(str(link), 'name')
                    out['ref'] = GetValue(str(link), 'reference')
                    out['link'] = link.get('href')
                    out['devise'] = 'EUR'
                    out['inc_vat'] = True
                    out['manufacturer'] = GetValue(str(link), 'manufacturer')
                    out['source'] = 'sf'

                    find.append(out)

            return find
    except HTTPError:
        print('Site inaxecesible')


def LRParts(ref):
    import requests
    import json

    payload = json.dumps({
        'template': 'live-search',
        'query': ref,
        'key': 'M3D9eNAWdhgJh4sVPKxfi2viNHGoVBMO'
    })

    reqUrl = f"https://api.clerk.io/v2/?payload={payload}"

    response = requests.request(
        "GET", reqUrl)

    find = []

    if response.status_code == 200:

        r = response.json()

        for r in r['product_data']:
            out = {
                'link': r['url'],
                'price': float(r['price']),
                'name': r['name'],
                'ref': str(r['id']),
                'devise': 'GBP',
                'inc_vat': False,
                'image': r['image'],
                'source': 'lrp'}

            find.append(out)

    return find


def LandService(ref):
    import requests

    reqUrl = f"https://eu1-search.doofinder.com/5/search?hashid=e517b3b916cd126250a46db6e9696c5f&query={ref}"

    headersList = {
        "Origin": "https://www.land-service.com"
    }

    response = requests.request("GET", reqUrl,  headers=headersList)

    find = []

    if response.status_code == 200:

        r = response.json()

        if r['query_name'] == 'match_and':
            for r in r['results']:
                out = {
                    'link': r['link'],
                    'price': float(r['price']),
                    'name': r['title'],
                    'ref': str(r['mpn']),
                    'devise': 'EUR',
                    'inc_vat': True,
                    'image': r['image_link'],
                    'manufacturer': r['brand'],
                    'source': 'ls'}

                find.append(out)

    return find


def BestOfLand(ref):
    import requests

    reqUrl = f"https://eu1-search.doofinder.com/5/search?hashid=090701841bea429cd906143b5bf7d800&query={ref}"

    headersList = {
        "Origin": "https://www.best-of-land.com"
    }

    response = requests.request("GET", reqUrl,  headers=headersList)

    find = []

    if response.status_code == 200:
        r = response.json()

        if r['query_name'] == 'match_and':
            for r in r['results']:
                out = {
                    'link': r['link'],
                    'price': float(r['price']),
                    'name': r['title'],
                    'ref': str(r['mpn']),
                    'devise': 'EUR',
                    'inc_vat': True,
                    'image': r['image_link'],
                    'manufacturer': r['brand'],
                    'source': 'bof'}

                find.append(out)

    return find


def RoverParts(ref):
    import requests
    import json

    reqUrl = "https://2qsh1yko9z-dsn.algolia.net/1/indexes/*/queries?x-algolia-application-id=2QSH1YKO9Z&x-algolia-api-key=2f9e1a80c81354832c8ee661e2d64486"

    headersList = {
        "Origin": "https://www.roverparts.com",
        "Content-Type": "application/json"
    }

    payload = json.dumps({
        "requests": [
            {
                "indexName": "roverTaxonomy",
                "params": f"query={ref}"
            }
        ]
    })

    response = requests.request(
        "POST", reqUrl, data=payload,  headers=headersList)

    if response.status_code == 200:

        resp = response.json()

        find = []

        for r in resp['results'][0]['hits']:
            if ref == r['WEBNO'][:len(ref)]:
                out = {
                    'link': f"https://www.roverparts.com{r['PARTURL']}",
                    'price': float(r['PRICE']),
                    'name': r['DESCRIPTION'],
                    'ref': r['PRODUCT_ID'],
                    'devise': 'GBP',
                    'inc_vat': False,
                    'manufacturer': r['MFR'],
                    'source': 'rp'}

                find.append(out)

    return(find)


def PaddockSpares(ref):
    import requests
    from bs4 import BeautifulSoup

    reqUrl = f"https://www.paddockspares.com/search/ajax/suggest/?q={ref}"

    response = requests.request("GET", reqUrl)

    if response.status_code == 200:

        find = []

        for r in response.json():
            if r['type'] == 'product' and r['title']:

                soup = BeautifulSoup(str(r['price']), "html.parser")

                valeur = soup.find('span', {'class': 'price-excluding-tax'})

                out = {
                    'link': r['url'],
                    'name': r['title'],
                    'price': float(valeur.attrs['data-price-amount']),
                    'ref': ref,
                    'devise': 'GBP',
                    'inc_vat': False,
                    'image': r['image'],
                    'source': 'ps'}

                find.append(out)

    return find


def RimmerBros(ref):
    import requests

    reqUrl = "https://rimmerbros.com/MCWebServices/SearchAutoCompleteService.asmx/GetSearchSuggestions"

    headersList = {
        "Content-Type": "application/json"
    }

    payload = json.dumps({"value": f"{ref}", "isMobile": "false"})

    response = requests.request(
        "POST", reqUrl, data=payload,  headers=headersList)

    if response.status_code == 200:

        find = []

        for r in response.json()['d']['ProductSuggestion']:
            if ref == r['ItemNo'][:len(ref)]:
                out = {
                    'link': f"https://rimmerbros.com/{r['Url']}",
                    'price': r['WebPrice'],
                    'name': r['Text'],
                    'ref': r['ItemNo'],
                    'devise': 'GBP',
                    'inc_vat': False,
                    'image': f"http:{r['Image'][1:-1]}",
                    'source': 'rb'}

                find.append(out)

    return find


def BritishParts(ref):
    import requests

    reqUrl = f"https://www.britishparts.co.uk/autocomplete/search/json?q={ref}"

    response = requests.request("POST", reqUrl)

    print(response.text)
