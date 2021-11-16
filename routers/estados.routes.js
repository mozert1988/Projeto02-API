const express = require("express");
const router = express.Router();

const Estado = require("./../models/estados");

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listall', async (req,res) => {
    await Estado.find({}).then((estados) => {
        console.log(estados);
        res.status(200).json(estados);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

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
        return; // nao esquecer dos returns dentro dos ifs
    }
    else if(!req.body.valorSalarioMinimo){
        res.status(400).json({message: "esta faltando valor do salário mínimo"});
        return; // nao esquecer dos returns dentro dos ifs
    }

    await Estado.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

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

});

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

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;   
    
    await Estado.findByIdAndDelete(id);
    
    res.send({ message: 'Estado excluído com sucesso' });
});



module.exports = router;