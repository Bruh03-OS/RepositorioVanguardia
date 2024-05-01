const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./conexionDB.js')

const app = express();
app.use(bodyParser.json());

connect().catch(console.dir);

const rutaInventario = require('./Routes/inventario.js');
app.use('/inventario', rutaInventario);

module.exports = app;
