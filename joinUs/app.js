var express = require('express');
var faker = require('faker');
var mysql = require('mysql');
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/style"));
 
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'sneha',     // your root username
  password : 'root',
  database : 'join_us_udemy',// the name of your db
});
 
app.get("/", function(req, res){
 var q = "SELECT COUNT(*) as count FROM users";
 connection.query(q, function(error, results){
 if (error) throw error;
 var count = results[0].count;
 //var msg = "We have " + results[0].count + " users";
 res.render('home', {count: count});
 });
});

app.post('/register', function(req,res){
 //console.log("Post request sent to /register email is " + req.body.email);
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 //console.log(err);
 if (err) throw err;
 console.log(result);
 res.redirect("/");
 });
});

/*app.get("/love", function(req, res){
 res.send("i love you");
});
 
app.get("/random_num", function(req, res){
 Math.random();
 res.send("7");
});*/

app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
