# Projeto2-API



- Dentro da pasta Models tem os modelos de banco dos arquivos cidades.js, estados.js e paises.js.

  ```
  const mongoose = require("mongoose");
  ```

- importando o mongoose

```
const cidadesModel = new mongoose.Schema({
    nome: { type: String, required: true },
    quantidadeDeBairros: { type: Number, required: true },
    populacao: { type: Number, required: true },
    dataAniversarioCidade: { type: Date, required: true }
});
const estadosModel = new mongoose.Schema({
    nome: { type: String, required: true },
    regiao: { type: String, required: true },
    populacao: { type: Number, required: true },
    valorSalarioMinimo: { type: Number, required: true }
});
const paisesModel = new mongoose.Schema({
    nome: { type: String, required: true },
    linguaMae: { type: String, required: true },
    populacao: { type: Number, required: true },
    pib: { type: Number, required: true }
});
```

- criando nosso modelo do banco

```
const Cidade = mongoose.model("Cidades",cidadesModel);
const Estado = mongoose.model("Estados",estadosModel);
const Pais = mongoose.model("Paises",paisesModel);
```

- a criação do modelo na colection.

  ```
  module.exports = Pais;
  ```

- Exportando o modelo pronto