import json
from random import randint,choices

def get_distinct_values(json_data, key):
    distinct_values = set()
    for item in json_data:
        if key in item:
            distinct_values.add(item[key])
    return distinct_values

with open('eventos.json', 'r') as json_file:
    data = json.load(json_file)

distinct_names = get_distinct_values(data, "promotor")

def lowercase_and_remove_spaces(input_string):
    # Convert the string to lowercase
    lowercase_string = input_string.lower()
    
    # Remove spaces from the lowercase string
    processed_string = lowercase_string.replace(" ", "")
    processed_string = processed_string.replace("câmaramunicipalde", "")
    
    return processed_string

dt = []
c = 0
for i in distinct_names:
    a = {
        "_id":c,
        "email": lowercase_and_remove_spaces(i) + str(choices(["@gmail.com","@hotmail.pt","@tinoni.hpt","@hackathon.um"],[20,20,10,15])[0]),
        "contacto" : "+315 760 100 120",
        "foto": "http://placehold.it/32x32",
        "promotor": i

    }
    dt.append(a)
    c+=1

with open('promotor.json', 'w', encoding='utf-8') as json_file:
    json.dump(dt, json_file,ensure_ascii=False, indent=4)

