const express = require('express');
const app = express();
const path = require('path');

console.log('im on a node server');

app.get('/', function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  res.sendFile(path.join('/index.html'));
})

app.listen(3000);




// const express = require('express');
// const path = require('path');
// const app = express();


// app.use(express.static(path.join('./')));


// app.listen(3000, () => {
  
// });