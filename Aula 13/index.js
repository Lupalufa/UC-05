const express = require("express")
const dotenv = require("dotenv")
const enderecoRoutes = require("./src/modules/endereco/routes/index")
const alunoRoutes = require("./src/modules/aluno/routes/index")


dotenv.config();

const port = process.env.PORTA
const app = express();

app.use(express.json());

// /aluno/:matricula
// /alunos
app.use(enderecoRoutes)

app.use(alunoRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
