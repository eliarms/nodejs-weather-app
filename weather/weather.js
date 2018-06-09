const request = require('request');
var SecretKey = 'ADD YOUR API KEY HERE';
var getweather = (lat,lng,callback) => {
  request ({
    url: `https://api.darksky.net/forecast/${SecretKey}/${lat},${lng}?si=12`,
    json:true
  },(error,response,body) =>{
    if(!error && response.statusCode === 200)
    {
      callback(undefined,{
        timezone:body.timezone,
        icon:body.currently.icon,
        summary:body.currently.summary,
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      })

    }
    else {
    callback('unable to fetch weather');
    }

  });
};

module.exports.getweather = getweather;
