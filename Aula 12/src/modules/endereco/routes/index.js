const express = require("express")
const EnderecoController = require("../controllers/index")

const router = express.Router()

router.get("/enderecos/:cep", EnderecoController.listarEnderecoCEP)

router.get("/enderecos/:cidade", EnderecoController.listarEnderecoCidade)

router.get("/enderecos", EnderecoController.listarEnderecos)

router.get("/endereco/:matricula", EnderecoController.listarEnderecoAlunos)

router.post("/endereco", EnderecoController.adicionarEnderecoAluno)

router.put("/endereco/:matricula", EnderecoController.editarEndereco)

module.exports = router