const express = require("express");
const router = express.Router();

const Pais = require('./../models/paises');

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listall', async (req,res) => {
    await Pais.find({}).then((paises) => {
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

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
        return; // nao esquecer dos returns dentro dos ifs
    }
    if(!req.body.pib){
        res.status(400).json({message: "esta faltando PIB"});
        return; // nao esquecer dos returns dentro dos ifs
    }

    await Pais.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

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

});

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

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
         
    await Pais.findByIdAndDelete(id);
    
    res.send({ message: 'País excluído com sucesso' });
});


module.exports = router;