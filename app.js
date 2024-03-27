const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req,res){
let day = date.getDate();
res.render("list",{listTitle:day, newListItems:items, route:"/"});
});

app.post("/", function(req,res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
app.post("/work", function(req,res){
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.get("/work",function (req,res){
  res.render("list",{listTitle:"Work", newListItems:workItems, route:"/work"});
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
