from flask import request
from core import app, api
    
# Route takes local param and makes api call
# Then uses api data and locale to search for the relevant price 
@app.route('/shippingCost/<string:locale>', methods=['GET'])
def getShippingCost(locale):
    data = api.APICall()
    price = api.findShippingPrice(data,locale)
    return str(price)