import config from '../env-config.json'
import xhr from './xhr';

class ConverterData {

    static getNoTokenHeaders() {
        return {
          'Content-Type': 'application/vnd.api+json',
          'unitRate': config.rates_url+'/1/',
          'Accept' : 'application/vnd.api+json'
        }
      }
    static getCurrencyUnitRate(currency){
        return {
            'Content-Type': 'application/vnd.api+json',
            'unitRate': config.rates_url+'/1/'.currency,
            'Accept' : 'application/vnd.api+json'
          }
      
    }
    static getAllUnitRates(){
        return {
            'Content-Type': 'application/vnd.api+json',
            'unitRate': config.api_url,
            'Accept' : 'application/vnd.api+json'
          }
      
    }
    static getAllRates() {
        return new Promise((res, rej) => {
    
          xhr.get("/rates", this.getAllUnitRates, (error, data) => {
            if (error) {
              console.log( "Error getting rates -- error=" + error);
              rej(error);
              //Zvikaramba 
            } else {
              if (data.hasOwnProperty("errors")) {
                rej(console.log ("Own error", error));
              } else {
                //  zvikauya;
                console.log("logged data for rates is :", data.data)
                res(data.data);
              }
            }
            
            console.log("Rates are :", data)
        
          });
    
        });
      }

}

export default ConverterData