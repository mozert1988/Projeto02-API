const mongoose = require("mongoose");

const cidadesModel = new mongoose.Schema({
    nome: {type: String, required: true },
    populacao: { type: Number},
    idioma: { type: Number, required: true},
    pib: {type: Number}
});

const Cidade = mongoose.model("Cidades", cidadesModel);

module.exports = Cidade; a