const express = require("express");
const router = express.Router ();
const Paises = require('./../Projeto02-Mod03/model/paises');

router.get('/', (req,res) => {
    res.status(200).json({message:"rota paises ok"});
});


router.get('/listall', async (req,res) => {
    await Paises.find({}).then((paises) => { 
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/findnome/:nome', async (req,res) => {
    const nome = req.params.nome;  
    await Pais.findOne({ nome:nome }).then((pais) => { 
        console.log(pais);
        if(pais == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(pais);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { 

    
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    } if(!req.body.populacao){
        res.status(400).json({message: "esta faltando a populacao"});
        return;
    }
     if(!req.body.idioma){
        res.status(400).json({message: "esta faltando o Idioma"});
        return;
    }
     if(!req.body.pib){
        res.status(400).json({message: "esta faltando o PIB"});
        return;
    }

    await Paises.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).json({message: "esta faltando id na URL"});
        return;
    }else if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando a populacao"});
        return;
    }
    else if(!req.body.idioma){
        res.status(400).json({message: "esta faltando o idioma"});
        return;
    }
    else if(!req.body.pib){
        res.status(400).json({message: "esta faltando o pib"});
        return;
    }

    await Pais.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/del/:id', async (req,res) => {
    if( req.params.id.length == 24){ 
        await Pais.deleteOne({_id:req.params.id}).then(() => { // conferir os caracteres se são mesmo 24 ou se devo colocar outro paramentro
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;