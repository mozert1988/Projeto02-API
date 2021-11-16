const mongoose = require("mongoose");

const cidadesModel = new mongoose.Schema({
    nome: { type: String, required: true },
    quantidadeDeBairros: { type: Number, required: true },
    populacao: { type: Number, required: true },
    dataAniversarioCidade: { type: Date, required: true }
});

const Cidade = mongoose.model("Cidades",cidadesModel);


module.exports = Cidade;