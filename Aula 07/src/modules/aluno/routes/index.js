const express = require('express')
const AlunoController = require("../controllers/index")

const router = express.Router()

router.get("/alunos", AlunoController.listar)

router.get("/aluno/:matricula", AlunoController.listarPorId)

router.post("/alunos", AlunoController.criar)

router.put("/aluno/:matricula", AlunoController.editar)

router.delete("/alunos", AlunoController.deletarTodos)

router.delete("/aluno/:matricula", AlunoController.deletarPorId)

module.exports = router