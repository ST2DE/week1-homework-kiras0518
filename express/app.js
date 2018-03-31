const express = require("express");
const app = express(); //new express server
//app.listen(3010);//select port 3000


app.get('/',function(req, res){
  res.send("Hello node!");
});

app.get('/about/me.html',function(req, res){
  //res.send("me");
  res.sendFile( __dirname + "/" + "me.html" );
  //console.log(req.query)
});

app.listen(3010, function () {
  console.log('App is running on port 3010!');}
);