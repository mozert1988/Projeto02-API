const express = require("express");
const router = express.Router();

const Cidade = require("./../models/cidades");

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listall', async (req,res) => {
    await Cidade.find({}).then((cidades) => {
        console.log(cidades);
        res.status(200).json(cidades);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

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
        return; // nao esquecer dos returns dentro dos ifs
    }
    if(!req.body.dataAniversarioCidade){
        res.status(400).json({message: "esta faltando data de aniversario da cidade"});
        return; // nao esquecer dos returns dentro dos ifs
    }

    await Cidade.create(req.body).then(() => {
        res.status(201).json({message: "cadastrado com sucesso"});
        
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })

});

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

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
       
    await Cidade.findByIdAndDelete(id);
    
    res.send({ message: 'Cidade excluída com sucesso' });
});



module.exports = router;