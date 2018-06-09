const request = require('request');
const yargs = require('yargs');
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

 var encodedAddress = encodeURIComponent(argv.address);

request({
  url:`https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
  json:true
},
(error, response,body)=>{
  if(error)
  {
    console.error("unable to connect to google servers");

  }
  else if (body.status == 'ZERO_RESULTS') {
      console.log("unable to find address");
  }
  else if (body.status == 'OK') {

      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      console.log(`Long: ${body.results[0].geometry.location.lng}`);
  }
  else {
    console.log(body.error_message);
  }


});
