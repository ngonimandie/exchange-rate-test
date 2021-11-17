# exchange-rate-test
Exchange rate application using nodejs and react js and stores the rates on mysql backend

# Summary 
- The app has a react js client and node js back end. 

# Set up mysql database
- open phpmyadmin on your localhost
- import the attached database with the same name or otherwise adjust config files calling the database



# Run API
- To run api run cd api in root directory
- run npm install to install dependencies
- start the api wirh node server.js

# Run client- 
- To run api run cd client in root directory
- run yarn install to install dependencies
- start the api with yarn start


- Access the exchange rate app from http://localhost:3000
- Access the exchange api on http://localhost:5000 with api/v1 prefix to the rates root

# Credits : Conversion formula
*I took the converstion formula from the site https://www.dreamincode.net/forums/topic/80449-currency-conversion-formula/ *
and implemented it in javascript
The formula is as follows:

****************************************************************************************************************************************
Get unit for currency 1 [say $1 or $2 etc.]
Get equivalent value for currency 2 [say 0.7EUR or 1.49EUR]
Get conversion from currency to currency input [from $ to EUR or from EUR to $].

accept amount to be converted
if it is from currency 1 to 2 then calculate (amount*currency2)/currency1
else calculate (amount*currency1)/currency2.
**************************************************************************************************************************************
