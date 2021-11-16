const express = require("express");
const app = express();
app.use(express.json()); 
const Conn = require("./models/conn/index");
Conn();



const cidadesRouter = require("./routers/cidades.routes");

const estadosRouter = require("./routers/estados.routes");

const paisesRouter = require("./routers/paises.routes");

app.use('/cidades',cidadesRouter);
app.use('/estados',estadosRouter);
app.use('/paises',paisesRouter);

app.get("/",(req,res) =>{
    res.json({api:"ok"})

})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
