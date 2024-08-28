const express = require('express');
const app = express();
const path = require('path');

console.log('im on a node server');

app.use(express.static(path.join('./')));
app.get('/', function (req, res) {


});

app.listen(3000, () => {
});



// const express = require('express');
// const path = require('path');
// const app = express();


// app.use(express.static(path.join('./')));


// app.listen(3000, () => {
  
// });