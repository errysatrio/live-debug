const express = require('express');
// const cors = require('cors')
const app = express();

const port = 3000

const routes = require('./routes/');
const errorHandler = require('./middlewares/error-handler');

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);
app.use('/', routes);

app.listen(port, ()=>console.log('listening on', port))

// module.exports = app;
