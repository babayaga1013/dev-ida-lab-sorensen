const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
app.use(express.static(path.join('./')));

});
app.listen(3000, () => {
  
});