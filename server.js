//instalar e executar uma query simples

const express = require('express');

const mysql = require ('mysql2');

const app = express();

app.listen(3000,()=>{
    console.log('servidor no ar ');
})

//criação da coneção com bancos de dados 

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
    database: 'nodejs_tasks'
})

//criamos a conexão com o banco de dados através do server
connection.connect(erro=>{
    if(erro){ 
        console.log("erro na conexão ao MySQL" +erro.message);
        return
    }
    console.log("coneção estabelecida");
})

//criando uma rota que execute a query 

app.get('/', (req,res)=>{
    connection.query('SELECT * FROM tasks',(err,results,fields)=>{
    if(err){
        console.log(err.message);
        res.send("erro ao obter a lista de tarefas");
    }
    else{
        res.send(results);
    }
})

})