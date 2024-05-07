const express = require('express');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DatosAPI from './conexionAPI.js';
import Inventario from './Routes/inventario.js'

const bodyParser = require('body-parser');
const { connect } = require('./conexionDB.js');

const app = express();
app.use(bodyParser.json());

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/datos_api" component={DatosAPI} />
            <Route exact path="/inventario" component={Inventario} />
        </Switch>
    </Router>,
);

connect().catch(console.dir);

module.exports = app;
