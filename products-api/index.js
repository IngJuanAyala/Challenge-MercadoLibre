const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');

const productsApi = require('./routes/products.js');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

app.use(express.json());
app.use(helmet());
app.use(cors());


app.all('/', function(req, res, next) {
  
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

productsApi(app);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});