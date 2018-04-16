const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/mainRouter');

const app = express();

app.use(logger('dev'));
app.use(express.static('public')); // we are already making react shit available here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3001;

app.use('/api/projects', mainRouter);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// app.get('/', (req, res) => {
//   res.send('Homepage for localhost: 3001')
// })

app.listen(PORT, (req, res) => {
  console.log(`Up and running, listening on port ☘️  ${PORT}`);
})
