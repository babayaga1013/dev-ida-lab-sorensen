console.log('im on a node server, yo');


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  app.use(express.static('index.html'))
  // res.send('Hello Node from Ex on local dev box')
})

app.listen(3000)
