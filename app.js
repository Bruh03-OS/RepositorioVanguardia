const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let inventario = [
    {
        id: 1,
        nombre: "Motor V8",
        entrada: "2024-04-25",
        salida: null,
        precio: 10.50,
        descripcion: "El motor V8, con sus ocho cilindros dispuestos en forma de V, es un icono de potencia y rendimiento en la industria automotriz. Su diseño compacto y eficiente ofrece una combinación perfecta entre fuerza y suavidad, mientras que su característico sonido de escape es la sinfonía de los amantes de la velocidad. Con una entrega de potencia suave y lineal, el motor V8 es la elección preferida para aquellos que buscan una experiencia de conducción emocionante y satisfactoria.",
        estado: "Disponible"
    }
];

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
