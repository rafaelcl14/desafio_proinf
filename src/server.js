const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/db')


db.connection.connect();

app.use(bodyParser.json());


//busca cargos
app.get('/cargo', (req, res) => {
    db.connection.query('select * from cargo_func.cargo;', function (error, results, fields) {
        
        res.json(results);
    });
    
});

//busca funcionarios
app.get('/func', (req, res) => {
    db.connection.query('select * from cargo_func.func;', function (error, results, fields) {
        res.json(results);
    });
    
});

//busca funcionarios
app.post('/func/', (req, res) => {
    const {nome, data_nasc , cpf , sexo, email, fk_cargo} = req.body;

    //validação nome
    if(nome.length <5 ){
        res.status(404).send('insira um nome valido');
    }

    db.connection.query("INSERT INTO cargo_func.func (nome, data_nasc , cpf , sexo, email, fk_cargo) values (?, ?, ?, ?, ?, ?)", [nome, data_nasc , cpf , sexo, email, fk_cargo],
     function (error, results, fields) {
        if (error) throw error;
        res.status(200).send('Usuario Criado');
      });
});

//deleta funcionarios
app.delete('/func/:id', (req, res) => {
    const id = req.params.id;

    db.connection.query("DELETE FROM cargo_func.func where id = ?", id,
    function (error, results, fields) {
       if (error) throw error;
       res.status(200).send('Usuario deletado');
     });

});


//atualiza funcionarios
app.put('/func/:id', (req, res) => {
    const id = req.params.id;
    const {nome, data_nasc , cpf , sexo, email, fk_cargo} = req.body;

    db.connection.query("UPDATE cargo_func.func SET nome= ?, data_nasc= ?, cpf= ?, sexo= ?, email= ?, fk_cargo= ? where id= ?", [nome, data_nasc , cpf , sexo, email, fk_cargo, id],
    function (error, results, fields) {
       if (error) throw error;
       res.status(200).send('Usuario atualizado');
     });

});


app.listen(3000)