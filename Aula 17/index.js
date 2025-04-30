const express = require("express")
const dotenv = require("dotenv")
//const enderecoRoutes = require("./src/modules/endereco/routes/index")
//const alunoRoutes = require("./src/modules/aluno/routes/index")
const sequelize = require("./src/config/configDB")

dotenv.config();

const port = process.env.PORTA
const app = express();

app.use(express.json());

// /aluno/:matricula 
// /alunos
//app.use(enderecoRoutes)

//app.use(alunoRoutes)

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('A conexão foi estabelecida com sucesso');
  } catch (error) {
    console.error('Não é possível conectar ao banco de dados:', error);
  }
  console.log(`Servidor rodando em http://localhost:${port}`);
});
