import requests
from requests.exceptions import HTTPError

urlString = 'https://seriesforever.com/'
try:
    r = requests.get(urlString)
    r.raise_for_status()
except HTTPError:
    print("La page n'existe pas.")
else:
    print(f'{urlString} existe!')
