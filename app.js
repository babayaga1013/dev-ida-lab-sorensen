// console.log('im on a node server, yo');


// const express = require('express');
// const path = require("path");
// const app = express();


// app.get('/', function (req, res) {
//   app.use(express.static(path.join('./')));
// res.send('Hello Node from Ex on local dev box')
  
// });

 // app.listen(3000);

const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
app.use(express.static(path.join('./')));

});
app.listen(3000, () => {
  
});