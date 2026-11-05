const db = require('../db')

// Cadastrar usuário
exports.cadastrar = (req, res) => {
    let { nome, email, senha } = req.body

    let sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?))'

    db.query(sql, [nome, email, senha], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            id: resultado.insertId
        })
    })
}

// Listar usuários
exports.listar = (req, res) => {
    let sql = 'SELECT id, nome, email FROM usuario'

    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json(resultado)
    })
}

// Atualizar usuário
exports.atualizar = (req, res) => {
    let { id } = req.params
    let { nome, email, senha } = req.body

    let sql = 'UPDATE usuario SET nome = ?, email = ?, senha = password(?) WHERE id = ?'

    db.query(sql, [nome, email, senha, id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Usuário atualizado com sucesso!' })
    })
}

// Excluir usuário
exports.excluir = (req, res) => {
    let { id } = req.params

    let sql = 'DELETE FROM usuario WHERE id = ?'

    db.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Usuário excluído com sucesso!' })
    })
}
// Login de usuário
exports.login = (req, res) => {
    let { email, senha } = req.body

    let sql = 'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = password(?)'

    db.query(sql, [email, senha], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        if (resultado.length === 0) {
            return res.status(401).json({
                mensagem: 'E-mail ou senha incorretos!'
            })
        }

        res.json({
            mensagem: 'Login realizado com sucesso!',
            usuario: resultado[0]
        })
    })
}