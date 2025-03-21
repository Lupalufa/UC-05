const express = require("express")
const dotenv = require("dotenv")
const alunoRoutes = require("./src/modules/aluno/routes/index")
const professorRoutes = require("./src/modules/professor/routes/index")
const cursoRoutes = require("./src/modules/cursos/routes/index")

dotenv.config();

const port = process.env.PORTA
const app = express();

app.use(express.json());

// /aluno/:matricula
// /alunos
app.use(alunoRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
