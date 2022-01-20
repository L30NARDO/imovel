const mongoose = require('../database');

const ImovelSchema = new mongoose.Schema({
    nomeProprietario:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true, 
    },
    celular: {
        type: String,
        required: true,
    },
    tipoImovel: {
        type: String,
        required: true,
    },
    enderecoImovel: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    complemento: {
        type: String,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    descricaoImovel: {
        type: String,
        required: true,
    },

    createAt:{
        type: Date,
        default: Date.now,
    }
});

const Imovel = mongoose.model('Imovel', ImovelSchema);
module.exports = Imovel;
