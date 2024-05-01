var routes = require('express').Router();

const inventario = require('../Routes/Controladores/ctrlInventario');
routes.post('newItem', inventario.create)

module.exports = routes;