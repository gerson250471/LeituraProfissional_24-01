/* Os passos deste projeto:
    1º: Criei a pasta
    2°: Entrei na pasta criando e atravéz do prompt realizei os seguintes comandos
        - npm init -y
        - npm i express msql2 dotenv
    3°: Criado o arquivo db.js "Local que vai guardar configurações de acesso ao banco de dados"
    4°: Criado o arquivo app.js "Espinha dorsal do nosso projeto"
*/

// Chamando variáveis de ambiente
require("dotenv").config();

// Informando onde está arquivo com a configuração do banco de dados
const db = require("./db")

// Configuração Inicial do projeto
const express = require("express");
const app = express();

app.use(express.json());

// Atualizar um cadastro
app.patch("/clientes/:id",(request,response) => {
    const id = parseInt(request.params.id);
    const clientes = request.body;
    db.updateCliente(id,clientes);
    response.sendStatus(200);
})

// Enviando um nome para cadastrar
app.post("/clientes",(request,response) => {
    const clientes = request.body;
    db.insertCliente(clientes);
    response.sendStatus(201);
})

// Obtendo um cliente específico
app.get("/clientes/:id",(requeste,response) => {
    const id = parseInt(requeste.params.id);
    response.json(db.selectCliente(id));
})

// Obtendo a lista de clientes
app.get("/clientes",(requeste,response) => {
    response.json(db.selectClientes());
})

// Rota padrão do cliente
app.get("/",(request,response) => {
    response.json({
        message:"Estou conseguindo aprender"
    })
})

app.listen(process.env.PORT,() =>{
    console.log("Está funcionando");
});

