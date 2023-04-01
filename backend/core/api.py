import requests

# Calls the given url and returns a jsonified response
# Gets the table data from the airtable page of Countries and Delivery costs
def APICall():
    response = requests.get('https://api.airtable.com/v0/appdEweaYaM57dnfg/tblt0S24Fts0fEF87',
                            headers={
        
        # !!
        # Enter API Key here
        # !!
        'Authorization': 'Enter API Key here'
        }
    )
    return response.json()

# Gets shipping price as per locale i.e. FR, GB, DK etc...
# Returns 0 if no price available for locale
# Otherwise returns N/A if not listed country
def findShippingPrice(destinations, locale):
    for n in destinations["records"]:
        for k, v in n.items():
            if "Destination" in v and v["Destination"] == locale:
                if "Fee" in v:
                    return v["Fee"]
                else:
                    return 0
    return "N/A"

