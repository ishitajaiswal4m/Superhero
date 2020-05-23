var express=require("express");
var app=express();
const port=3000;
const request=require("request");
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("search");
});
app.get("/results",function(req,res){
	var query=req.query.heroid;
	request("https://www.superheroapi.com/api.php/1638291169643366/"+query,function(error,response,body){
 		if(!error && response.statusCode==200){
 			var data=JSON.parse(body)
 			res.render("results",{data:data});
 		}
	});
});

app.get("*",function(req,res){
  res.send("OOps you requested a wrong url!!");
});
app.listen(port,function(){
	console.log("server is running!");
}); 

