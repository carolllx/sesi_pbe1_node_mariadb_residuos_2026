const db = require('../db')

// Cadastrar ocorrência
exports.cadastrar = (req, res) => {
    let { usuarioId, local, tipoResiduo, nivelRisco, status } = req.body

    let sql = 'INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, status) VALUES (?, ?, ?, ?, ?)'

    db.query(sql, [usuarioId, local, tipoResiduo, nivelRisco, status], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.status(201).json({
            mensagem: 'Ocorrência cadastrada com sucesso!',
            id: resultado.insertId
        })
    })
}

// Listar ocorrências
exports.listar = (req, res) => {
    let sql = 'SELECT * FROM ocorrencia'

    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json(resultado)
    })
}

// Atualizar ocorrência
exports.atualizar = (req, res) => {
    let { id } = req.params
    let { usuarioId, local, tipoResiduo, nivelRisco, status } = req.body

    let sql = 'UPDATE ocorrencia SET usuarioId = ?, local = ?, tipoResiduo = ?, nivelRisco = ?, status = ? WHERE id = ?'

    db.query(sql, [usuarioId, local, tipoResiduo, nivelRisco, status, id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Ocorrência atualizada com sucesso!' })
    })
}

// Excluir ocorrência
exports.excluir = (req, res) => {
    let { id } = req.params

    let sql = 'DELETE FROM ocorrencia WHERE id = ?'

    db.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Ocorrência excluída com sucesso!' })
    })
}

// Resumo: total de ocorrências tratadas
exports.resumo = (req, res) => {
    let sql = "SELECT COUNT(*) AS totalTratados FROM ocorrencia WHERE status = 'Tratado'"

    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json(resultado[0])
    })
}