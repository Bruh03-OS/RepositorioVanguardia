const mongoose = require('mongoose');
const Inventario = require("../../Schemas/inventarioSchema.js");

const create = async (req, res) => {
    try {
        const { nombre, descripcion, cantidad, precio } = req.body;
        const nuevoItem = new Inventario({
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad,
            precio: precio
        });
        const response = await nuevoItem.save();
        res.status(201).json({
            mensaje: 'Item creado exitosamente', item: response
        });
    } catch (error) {
        console.error('Error al crear el item:', error);
        res.status(500).json({ 
            mensaje: 'Error al crear el item', error: error.message 
        });
    }
};

module.exports = {
    create
}
