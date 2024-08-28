console.log('im on a node server, yo');


const express = require('express');
const path = require("path");
const app = express();


app.get('/', function (req, res) {
  app.use(express.static(path.join('./')));
  // res.send('Hello Node from Ex on local dev box')
  app.listen(3000);
});

// app.listen(3000);
