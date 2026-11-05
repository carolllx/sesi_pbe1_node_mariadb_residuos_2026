const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gestao_residuos'
})

connection.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro)
        return
    }

    console.log('Conectado ao banco de dados com sucesso!')
})

module.exports = connection