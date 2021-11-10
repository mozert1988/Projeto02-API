const mongoose = require("mongoose");

const estadoModel = new mongoose.Schema({
    nome: {type: String, required: true },
    populacao: { type: Number},
    idioma: { type: Number, required: true},
    pib: {type: Number}
});

const Estado = mongoose.model("Estados", estadoModel);

module.exports = Estado; 