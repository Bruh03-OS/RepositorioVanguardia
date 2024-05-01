const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Inventario = mongoose.model('Inventario', inventarioSchema);
module.exports = Inventario;