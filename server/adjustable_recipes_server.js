//@format
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('../public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(6000, () => {
  console.log(`adjustable recipes server running on port 6000`);
});
