const mongoose = require("mongoose");

const paisesModel = new mongoose.Schema({
    nome: {type: String, required: true },
    populacao: { type: Number},
    idioma: { type: String, required: true},
    pib: {type: Number}
});

const Paises = mongoose.model("Paises", paisesModel);

module.exports = Paises; 