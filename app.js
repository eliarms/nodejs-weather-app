const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
     console.log(JSON.stringify(results, undefined, 2));
   }
 });
