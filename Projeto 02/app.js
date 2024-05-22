// Chamando variáveis de ambiente
require("dotenv").config();

// Configuração Inicial do projeto
const express = require("express");
const app = express();
app.listen(process.env.PORT,() =>{
    console.log("Está funcionando");
});