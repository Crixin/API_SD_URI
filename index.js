const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.1.152",
  user: "root",
  password: "root",
  port     : '3306',
  database : 'sdbd'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json())

app.listen(3000); 
