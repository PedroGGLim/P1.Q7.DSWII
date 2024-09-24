const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'matheus',
    password: 'matheus',
    database: 'escola'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

const cadastrarAluno = (aluno) => {
    const sql = 'INSERT INTO aluno (id, nome, email, telefone) VALUES (?, ?, ?, ?)';
    connection.query(sql, [aluno.id, aluno.nome, aluno.email, aluno.telefone], (err, result) => {
        if (err) throw err;
        console.log('Aluno cadastrado:', result);
    });
};

const atualizarAluno = (aluno) => {
    const sql = 'UPDATE aluno SET nome = ?, email = ?, telefone = ? WHERE id = ?';
    connection.query(sql, [aluno.nome, aluno.email, aluno.telefone, aluno.id], (err, result) => {
        if (err) throw err;
        console.log('Aluno atualizado:', result);
    });
};

module.exports = { cadastrarAluno, atualizarAluno };