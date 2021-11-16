const mongoose = require("mongoose");

const estadosModel = new mongoose.Schema({
    nome: { type: String, required: true },
    regiao: { type: String, required: true },
    populacao: { type: Number, required: true },
    valorSalarioMinimo: { type: Number, required: true }
});

const Estado = mongoose.model("Estados",estadosModel);


module.exports = Estado; 