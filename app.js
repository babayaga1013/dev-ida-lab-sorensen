const express = require('express');
const app = express();
const path = require('path');

console.log('im on a node server');

app.use(express.static(path.join('./')));
app.get('/', function (req, res) {


});

app.listen(3000, () => {
});

