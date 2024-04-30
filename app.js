const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

/* Aqui empieza el CRUD de inventario */
app.get('/inventario', (req, res) => {
    res.json(inventario);
});

app.get('/inventario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = inventario.find(item => item.id === id);
    if (!producto) {
        res.status(404).send('Producto no encontrado');
    } else {
        res.json(producto);
    }
});

app.post('/addInventario', (req, res) => {
    const producto = req.body;
    inventario.push(producto);
    res.status(201).send('Producto creado exitosamente');
});

app.delete('/inventario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    inventario = inventario.filter(item => item.id !== id);
    res.send('Producto eliminado exitosamente');
});
/* Aqui termina el CRUD de inventario */


app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.post('/', (req, res) => {
    res.send('Got a POST request!')
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request a   t /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

module.exports = app;
