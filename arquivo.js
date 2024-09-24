const express = require('express');
const bodyParser = require('body-parser');
const dao = require('./dao');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cadastrar', (req, res) => {
    dao.cadastrarAluno(req.body);
    res.send('Aluno cadastrado com sucesso!');
});

app.put('/atualizar', (req, res) => {
    dao.atualizarAluno(req.body);
    res.send('Aluno atualizado com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

function cadastrar() {
    const aluno = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    };

    fetch('/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    }).then(response => response.text()).then(data => alert(data));
}

function atualizar() {
    const aluno = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    };

    fetch('/atualizar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    }).then(response => response.text()).then(data => alert(data));
}