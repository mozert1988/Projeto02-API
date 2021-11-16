# Projeto2-API

- Na pasta index.js na raiz do projeto.

  ```
  const express = require("express");
  ```

- import do express

  ```
  const app = express();
  ```

- definindo o app como express

  ```
  app.use(express.json());
  ```

- definindo o JSON no projeto

  ```
  const Conn = require("./models/conn/index");
  ```

- importando a conexao

  ```
  Conn();
  ```

- executa a func de conexao

  ```
  const cidadesRouter = require("./routers/cidades.routes");
  ```

  ```
  const estadosRouter = require("./routers/estados.routes");
  ```

  ```
  const paisesRouter = require("./routers/paises.routes");
  ```

- Importando as rotas

  ```
  app.use('/cidades',cidadesRouter);
  app.use('/estados',estadosRouter);
  app.use('/paises',paisesRouter);
  ```

- Chamando as rotas que foram importadas

  ```
  app.get("/",(req,res) =>{
      res.json({api:"ok"})
  
  })
  ```

- Rota que leva para a raiz da aplicação

  ```
  app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
  });
  ```

- Função `app.listen()`indicando exatamente onde nosso servidor irá rodar