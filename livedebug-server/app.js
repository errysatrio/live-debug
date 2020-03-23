const express = require('express');
const app = express();

// const cors = require('cors')
const port = 3000

const routes = require('./routes/');
const errorHandler = require('./middlewares/error-handler');

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorHandler);

// app.listen(port, ()=>console.log('listening on', port))

module.exports = app;
