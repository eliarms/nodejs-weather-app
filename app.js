const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//get the address from user input
const argv = yargs
 .options({
   a:{
     demand:true,
     alias:'address',
     descrbibe:'Addres to fecth'
   }
 })
 .help()
 .alias('help','h')
 .argv;

//call geocodeAddress and pass the address
 geocode.geocodeAddress(argv.address ,(errorMessage, results) => {
   //check the callback if we have error message else print the returned results
   if(errorMessage)
   {
     console.log(errorMessage);
   }
   else {
     //console.log(JSON.stringify(results, undefined, 2));
     console.log(results.Address);
     //call the getweather function and pass the longitude, lagitude
      weather.getweather(results.Latitude,results.Longitude ,(errorMessage, weatherResults) => {
        //check the callback if we have error message else print the returned results
        if(errorMessage)
        {
          console.log(errorMessage);
        }
        else {
          console.log(JSON.stringify(weatherResults, undefined, 2));
          //console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature} :)`)
        }
      });
   }
 });
