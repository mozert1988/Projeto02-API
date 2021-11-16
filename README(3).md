# Projeto2-API

- Na pasta routers, temos três arquivos javascript: cidades.routes.js, estados.routes.js e paises.routes.js

  ```
  const express = require("express");
  ```

- import do express

  ```
  const router = express.Router();
  ```

- define app como express

  ```
  const Cidade = require("./../models/cidades");
  ```

- import do modelo cidade

  ```
  router.get('/', (req,res) => {
      res.status(200).json({message:"rota pessoas ok"});
  });
  ```

- Rota que leva para a raiz da aplicação

  ```
  router.get('/listall', async (req,res) => {
      await Cidade.find({}).then((cidades) => {
          console.log(cidades);
          res.status(200).json(cidades);
      }).catch((err) => {
          res.status(204).json({message:"Nada foi encontrado"});
          console.error(err);
      });
  });
  ```



```
router.get('/listall', async (req,res) => {
    await Estado.find({}).then((estados) => {
        console.log(estados);
        res.status(200).json(estados);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});
router.get('/listall', async (req,res) => {
    await Pais.find({}).then((paises) => {
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});
```

- Rota que retorna todas as cidades cadastradas no banco utilizando a função `.find()`

  ```
  router.get('/listname/:nome', async (req,res) => {
      const nome = req.params.nome; 
      await Cidade.findOne({ nome:nome }).then((cidade) => { 
          console.log(cidade);
          if(cidade == null){ 
              res.status(404).json({message: "não foi encontrado"});
          }else{
              res.status(200).json(cidade);
          }
  
      }).catch((err) => {
          res.status(404).json({message:"Nada foi encontrado"});
          console.error(err);
      });
  
  })
  ```

  ```
  router.get('/listname/:nome', async (req,res) => {
      const nome = req.params.nome; 
      await Estado.findOne({ nome:nome }).then((estado) => { 
          console.log(estado);
          if(estado == null){ 
              res.status(404).json({message: "não foi encontrado"});
          }else{
              res.status(200).json(estado);
          }
  
      }).catch((err) => {
          res.status(404).json({message:"Nada foi encontrado"});
          console.error(err);
      });
  
  })
  ```

  ```
  router.get('/listname/:nome', async (req,res) => {
      const nome = req.params.nome; 
      await Pais.findOne({ nome:nome }).then((pais) => { 
          console.log(pais);
          if(pais == null){ 
              res.status(404).json({message: "não foi encontrado"});
          }else{
              res.status(200).json(pais);
          }
  
      }).catch((err) => {
          res.status(404).json({message:"Nada foi encontrado"});
          console.error(err);
      });
  
  })
  ```

- Rota que retorna nome por parâmetro

- findOne retorna o primeiro que der match com o item passado

- validando se retorna null

  ```
  router.post('/add', async (req,res) => {
      // validando as entradas do usuario
      if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }if(!req.body.quantidadeDeBairros){
          res.status(400).json({message: "esta faltando quantidade de bairros"});
          return;
      }
      if(!req.body.populacao){
          res.status(400).json({message: "esta faltando populacao"});
          return; 
      }
      if(!req.body.dataAniversarioCidade){
          res.status(400).json({message: "esta faltando data de aniversario da cidade"});
          return; 
      }
  
      await Cidade.create(req.body).then(() => {
          res.status(201).json({message: "cadastrado com sucesso"});
          
      }).catch((err) => {
          res.status(400).json({message: "algo esta errado"});
          console.error(err);
      })
  
  });
  ```

  ```
  router.post('/add', async (req,res) => {
      //validando as entradas do usuario
      if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }else if(!req.body.regiao){
          res.status(400).json({message: "esta faltando regiao"});
          return;
      }
      else if(!req.body.populacao){
          res.status(400).json({message: "esta faltando populacao"});
          return; 
      }
      else if(!req.body.valorSalarioMinimo){
          res.status(400).json({message: "esta faltando valor do salário mínimo"});
          return; 
      }
  
      await Estado.create(req.body).then(() => {
          res.status(200).json({message: "cadastrado com sucesso"});
      }).catch((err) => {
          res.status(400).json({message: "algo esta errado"});
          console.error(err);
      })
  });
  ```

  ```
  router.post('/add', async (req,res) => {
      //validando as entradas do usuario
      if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }if(!req.body.populacao){
          res.status(400).json({message: "esta faltando população"});
          return;
      }
      if(!req.body.linguaMae){
          res.status(400).json({message: "esta faltando língua mãe"});
          return; 
      }
      if(!req.body.pib){
          res.status(400).json({message: "esta faltando PIB"});
          return; 
      }
  
      await Pais.create(req.body).then(() => {
          res.status(200).json({message: "cadastrado com sucesso"});
      }).catch((err) => {
          res.status(400).json({message: "algo esta errado"});
          console.error(err);
      })
  });
  ```

- Rota que adiciona no banco utilizando a função `.create`

- add nova informação no banco validando as entradas do usuario

  ```
  router.put('/update/:id', async (req, res) => {
      const id = req.params.id;
      if(!id){
          res.status(400).json({message: "esta faltando id na URL"});
          return;
      }else if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }else if(!req.body.quantidadeDeBairros){
          res.status(400).json({message: "esta faltando quantidade de bairros"});
          return;
      }
      else if(!req.body.dataAniversarioCidade){
          res.status(400).json({message: "esta faltando data de aniversario da cidade"});
          return;
      }
  
      await Cidade.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
          res.status(200).json({message: "Atualizado com sucesso"});
      }).catch((err) => {
          console.error(err);
          res.status(400).json({message: "algo esta errado"});
      });
  });
  ```

  ```
  router.put('/update/:id', async (req, res) => {
      const id = req.params.id;
      if(!id){
          res.status(400).json({message: "esta faltando id na URL"});
          return;
      }else if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }else if(!req.body.regiao){
          res.status(400).json({message: "esta faltando região"});
          return;
      }
      else if(!req.body.populacao){
          res.status(400).json({message: "esta faltando população"});
          return;
      }
      else if(!req.body.valorSalarioMinimo){
          res.status(400).json({message: "esta faltando valor do salário mínimo"});
          return;
      }
  
      await Estado.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
          res.status(200).json({message: "Atualizado com sucesso"});
      }).catch((err) => {
          console.error(err);
          res.status(400).json({message: "algo esta errado"});
      });
  });
  ```

  ```
  router.put('/update/:id', async (req, res) => {
      const id = req.params.id;
      if(!id){
          res.status(400).json({message: "esta faltando id na URL"});
          return;
      }else if(!req.body.nome){
          res.status(400).json({message: "esta faltando nome"});
          return;
      }else if(!req.body.populacao){
          res.status(400).json({message: "esta faltando população"});
          return;
      }
      else if(!req.body.linguaMae){
          res.status(400).json({message: "esta faltando língua mãe"});
          return;
      }
      else if(!req.body.pib){
          res.status(400).json({message: "esta faltando PIB"});
          return;
      }
  
      await Pais.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
          res.status(200).json({message: "Atualizado com sucesso"});
      }).catch((err) => {
          console.error(err);
          res.status(400).json({message: "algo esta errado"});
      });
  });
  ```

- Em seguida, podemos lidar com a solicitação PUT com um método put. Dessa forma podemos atualizar dados do nosso banco.

- Nesse caso precisamos definir um id para que possamos atualizar somente o dado indicado pelo usuário e também precisamos do corpo da requisição, para saber o que exatamente será atualizado.

- updateOne atualiza o primeiro que encontrar e der match

  ```
  router.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;
         
      await Cidade.findByIdAndDelete(id);
      
      res.send({ message: 'Cidade excluída com sucesso' });
  });
  ```

  ```
  router.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;   
      
      await Estado.findByIdAndDelete(id);
      
      res.send({ message: 'Estado excluído com sucesso' });
  });
  ```

  ```
  router.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;
           
      await Pais.findByIdAndDelete(id);
      
      res.send({ message: 'País excluído com sucesso' });
  });
  ```

- Com o método [DELETE], como o nome já diz, podemos deletar um registro do nosso banco.

- Nele apenas precisamos inserir uma identificação, seja ela o Id, ou o campo nome por exemplo, para ele saber o que precisa ser excluído e concluir a requisição.

  ```
  module.exports = router;
  ```

  

- Exportando o módulo router.