const express = require('express')
const router = express.Router()

const usuario = require('./controllers/usuario')
const ocorrencia = require('./controllers/ocorrencia')

// Rotas de usuários
router.post('/usuarios', usuario.cadastrar)
router.get('/usuarios', usuario.listar)
router.put('/usuarios/:id', usuario.atualizar)
router.delete('/usuarios/:id', usuario.excluir)
router.post('/login', usuario.login)

// Rotas de ocorrências
router.post('/ocorrencias', ocorrencia.cadastrar)
router.get('/ocorrencias', ocorrencia.listar)
router.put('/ocorrencias/:id', ocorrencia.atualizar)
router.delete('/ocorrencias/:id', ocorrencia.excluir)

// Resumo de ocorrências tratadas
router.get('/ocorrencias/resumo', ocorrencia.resumo)

module.exports = router