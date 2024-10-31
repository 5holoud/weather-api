///////weather api/////
const request =require("request");
const forecast =require("./data1/forecast");
const { error } = require("console");

/////////////////////////////////////////////////////////////////////////////////////
//mapbox//
const geocode=require("./geocode/geocode")
const country =process.argv[2]
geocode(country, (error , data)=>{
    
    console.log("ERROR:", error);
    console.log("DATA:", data);

    forecast(data.latitude , data.longtitude ,(error,data)=>{
        console.log("ERROR :" ,error)
        console.log("DATA :",data)
    })
})

