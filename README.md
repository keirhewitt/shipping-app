## Confirmation page for a Shipping application

*Interview task; est. time to complete: ~1 business day*

**Backend**   -- Python Flask
<br>
**Frontend**  -- React

>Shipping location can be changed via url param<br>
>-Will dynamically re-adjust the shipping price based on the country code<br>
>--React will listen for any changes to this param<br>
>---When it detects a change it will prompt the backend to call the API and return the correct price<br>
>----The API used accesses a table of shipping locations and prices.<br>

![shipping-main-GB](https://user-images.githubusercontent.com/57302739/230919917-12501275-bc01-4e9a-9f8f-edd7ab68d4cd.png)

# To run:

 - Navigate to backend/ and run - ```npm install```
 - Navigate to frontend/ and run - ```pip install -r requirements.txt```
 - Navigate to backend/core/api.py and enter a functional API key 

 - In frontend/ , run ```npm start```
 - In backend/ , run ```py main.py```

The application will open on ```localhost:3000``` and will not have any params by default, to change the country, add param via 'locale=XX' i.e. 
 - ```localhost:3000/?locale=GB```
 - ```localhost:3000/?locale=NL```

