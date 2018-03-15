const express = require('express');
const logger = require('morgan');
const path = require('path')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Homepage for localhost: 3001')
})





app.listen(PORT, (req, res) => {
  console.log(`Up and running, listening on port ☘️  ${PORT}`);
})
