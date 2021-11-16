# Projeto02-API

Projeto2_Modulo3
Na pasta Models, temos uma subpasta chamada conn.

Dentro da pasta conn, temos o index.js com o seguinte código:

const mongoose = require("mongoose");
importando o mongoose
async function Conn(){
    await mongoose.connect("mongodb://localhost:27017/API-Mundo").then(() => {
        console.log("MongoDB esta conectado");
    }).catch((err) => {
        console.error(err);
    });
}
Criamos uma função para estabelecer a conexão com o banco, ela deve ser assíncrona para que enquanto ela não cumpra o seu dever e retorne a conexão, ela não pare de ser executada. Inserimos uma validação para que se algo der errado durante a tentativa conexão, seja retornado uma mensagem de erro ou se der certo de sucesso.

module.exports = Conn;
Exportando o modelo pronto