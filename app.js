
const express = require('express');
const app = express();
const path = require('path');

console.log('im on a node server');

app.use(express.static(path.join('./')));
app.get('/', function (req, res) {


});

app.listen(3000);



// const express = require('express')
// const app = express()
// app.set('view engine', 'ejs')
// app.use(express.static('./public/'))

// console.log('im on a node server change that and that tanad f, yo');

// app.get('/', function (req, res) {
//   res.send('Hello Node from Ex on local dev box')
//   res.sendFile('index.html');
// })

// app.get('/ejs', (req,res)=>{
// ``
//   res.render('index', {
//     myServerVariable : "something from server"
//   });

// })

// app.listen(5000)