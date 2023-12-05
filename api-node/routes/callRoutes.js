const route = require('express').Router();

const Call = require('../models/Call')

//Criar Chamados
route.post('/', async (req, res) => {
    const{computer, code, room, issue} = req.body

    if(!computer || !code || !room || !issue) {
        res.status(422).json({error: 'Preencha todos os dados!!'})
        return
    }

    const call = {
        computer,
        code,
        room,
        issue
    }

    try{
        await Call.create(call)

        res.status(201).json({message: 'Chamado registrado com Sucesso!!'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})


//Listar Chamados
route.get('/', async (req,res) => {
    try {
        const call = await Call.find()

        res.status(200).json(call)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = route