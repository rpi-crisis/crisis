from re import I
from bs4 import BeautifulSoup
import requests
r = requests.get("https://realpython.github.io/fake-jobs/")
#print(r.content)

locations = {}
soup = BeautifulSoup(r.content, 'html5lib')
table = soup.find(id="ResultsContainer")
job_elements = table.find_all("div", class_="card-content")
#print(table)
for x in job_elements:
    location_element = x.find("p", class_="location")
    location_index = location_element.text.strip().split(",")
    inputted_location = location_index[1].replace(" ", "")
    try:
        locations[inputted_location].append(location_index[0])
    except KeyError:
        locations[inputted_location] = []
        locations[inputted_location].append(location_index[0])
    


for j in locations:
    print(j)
    print(len(locations[j]))
    print(locations[j])
    print(" ")
#print(soup.prettify)