const request = require('request');

var geocodeAddress = (address,callback) =>{


  var encodedAddress = encodeURIComponent(address);

  request({
   url:`https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
   json:true
  },
  (error, response,body)=>{
   if(error)
   {
     callback("unable to connect to google servers");

   }
   else if (body.status == 'ZERO_RESULTS') {
       callback("unable to find address");
   }
   else if (body.status == 'OK') {
      callback(undefined,{
        Address:  body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng
      });

   }
   else {
     callback(body.error_message);
    }

  });
};

module.exports.geocodeAddress = geocodeAddress;
