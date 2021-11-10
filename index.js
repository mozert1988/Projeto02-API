const express = require("express");
const app = express();

app.use(express.json());

const Conn = require('./Projeto02-Mod03/model/conn/index');



const port = 3000;

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades',cidadesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use('/estados',estadosRouter);

const paisesRouter = require("./routers/paises.routes");
app.use('/paises',paisesRouter); 


Conn();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});