import json
import requests

response = requests.get('https://randomuser.me/api/?results=10')
data = response.json()

for user in data['results']:
  print(user['name']['first'])

# items = json.loads('[{"id":1, "text":"Item 1"}]')

# for item in items:
#   print(item['id'])

# print(response.json())


def greet(greeting, name):
  """Returns a greeting
  
  Arguments:
      greeting {string} -- A greet
      name {string} -- name
  
  Returns:
      string -- a greeting and name combined
  """
  return f'{greeting} {name}'





