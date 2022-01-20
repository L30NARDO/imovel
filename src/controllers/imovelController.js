const express = require('express');

const Imovel = require('../model/imovel');

const router = express.Router();

router.get('', async (req, res) => {
    try{
        const imovel = await Imovel.get()
        return res.status(200).send(imovel);
    }catch(err){
        return res.status(500).send({error: 'Erro ao listar todos imóveis'}); 
    }
});

router.get('/{id}', async (req, res) => {
    try{
        const imovel = await Imovel.getById(id);
        return res.status(200).send(imovel);
    }catch(err){
        return res.status(500).send({error: 'Erro ao buscar imóvel'}); 
    }
});

router.post('', async (req, res) => {
    try{
        const imovel = await Imovel.create(req.body);
        return res.status(201).send(imovel);
    }catch(err){
        return res.status(500).send({error: 'Erro ao criar imóvel'}); 
    }
});

router.put('/alterar', async (req, res) => {
    try{
        const imovel = await Imovel.update(req.body);
        return res.status(200).send({imovel});
    }catch(err){
        return res.status(500).send({error: 'Erro ao atualizar imóvel'}); 
    }
});

router.delete('/{id}', async (req, res) => {
    try{
        const imovel = await Imovel.delete(req.body.id);
        return res.send({imovel});
    }catch(err){
        return res.status(500).send({error: 'Erro ao deletar imovel'}); 
    }
});

//Prefixo do controller
module.exports = app => app.use('/imovel', router);
