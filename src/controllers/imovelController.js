const express = require('express');

const Imovel = require('../model/imovel');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const imovel = await Imovel.find()
        return res.status(200).send(imovel);
    }catch(err){
        return res.status(400).send({error: 'Erro ao listar todos imóveis'}); 
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const imovel = await Imovel.findById(id);
        return res.status(200).send(imovel);
    }catch(err){
        return res.status(400).send({error: 'Erro ao buscar imóvel'}); 
    }
});

router.post('/', async (req, res) => {
    try{
        const imovel = await Imovel.create(req.body);
        return res.status(201).send(imovel);
    }catch(err){
        console.log(err);
        return res.status(400).send({error: 'Erro ao criar imóvel'}); 
    }
});

router.put('/:id', async (req, res) => {
  await Imovel.findByIdAndUpdate(req.params.id, {
            $set: {
            nomeProprietario: req.body.nomeProprietario,
            email: req.body.email,
            celular: req.body.celular,
            tipoImovel: req.body.tipoImovel,
            enderecoImovel: req.body.enderecoImovel,
            numero: req.body.numero,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cidade:req.body.cidade,
            estado: req.body.estado,
            descricaoImovel:req.body.descricaoImovel
            }
        }).then( x => {
        return res.status(200).send({message: 'Imóvel atualizado com sucesso'});
    }).catch(err => {
        return res.status(400).send({error: 'Erro ao atualizar imóvel'}); 
    });
});

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        await Imovel.findByIdAndDelete(id);
        return res.status(200).send({message: 'Imóvel deletado com sucesso!'});
    }catch(err){
        console.log(err)
        return res.status(400).send({error: 'Erro ao deletar imovel'}); 
    }
});

//Prefixo do controller
module.exports = app => app.use('/imovel', router);
