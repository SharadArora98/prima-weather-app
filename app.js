var express=require("express");
var app=express();
var request=require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
 res.render("index");
});

app.get("/results",function(req,res){
	var temp=req.query.city;
	var url="http://api.openweathermap.org/data/2.5/weather?q="+temp+"&appid=b64fbbb25b52d4f9a6309ca7e502a07c";
	request(url,function(error,response,body){
		if(!error && response.statusCode ==200){
			var data=JSON.parse(body);
			res.render("results",{data: data});			
		}
	});
});

app.listen(3000, function(){
	console.log("APP started");
});