
const express = require('express');
const app = express();
const path = require('path');

console.log('im on a node server');

app.use(express.static(path.join('./')));
app.get('/', function (req, res) {


});

app.listen(3000);



// console.log('im on a node server, yo');


// const express = require('express')
// const app = express()
// app.use(express.static('./public/'))

// app.get('/', function (req, res) {
//   res.sendfile('index.html');
// })

// app.listen(3000)