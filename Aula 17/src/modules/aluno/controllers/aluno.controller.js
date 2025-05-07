const { AlunoModel } = require("../models/index")


class AlunoController {
    static async criar(req, res) {
        try {
            const { matricula, nome, email, senha } = req.body
            const novoAluno = await AlunoModel.criar(matricula, nome, email, senha)
            res.status(201).json({ msg: "Aluno criado com sucesso", aluno: novoAluno })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar o aluno!", erro: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const matricula = req.params.matricula
            const { nome, email, senha } = req.body
            if (!nome || !email || !senha) {
                return res.status(400).json({ msg: "Todos os campos devem ser obrigatorios" })
            }
            const alunoAtualizado = await AlunoModel.editar(matricula, nome, email, senha)
            if (alunoAtualizado.length === 0) {
                return res.status(200).json({ msg: "Não foi possivel atualizar esse aluno" })
            }
            res.status(200).json({
                msg: "Aluno atualizado com sucesso!",
                aluno: alunoAtualizado
            })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar o aluno!", erro: error.message })
        }
    }

    static async listar(req, res) {
        try {
            const alunos = await AlunoModel.listar()
            if (alunos.length === 0) {
                return res.status(400).json({ msg: "Não foi encontrado nenhum aluno" })
            }
            res.status(200).json(alunos)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar os alunos!", erro: error.message })
        }
    }

    static async listarPorId(req, res) {
        try {
            const matricula = req.params.matricula
            const aluno = await AlunoModel.listarPorId(matricula)
            if (!aluno) {
                return res.status(400).json({ msg: "Não foi possivel listar o aluno solicitado" })
            }
            res.status(200).json(aluno)
        } catch (error) {

        }
    }

    static async deletarTodos(req, res) {
        try {
            await AlunoModel.deletarTodos()
            res.status(200).json({ msg: "Todos os alunos foram deletados" })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao deletar os alunos!", erro: error.message })
        }
    }

    static async deletarPorId(req, res) {
        try {
            const matricula = req.params.matricula
            const aluno = await AlunoModel.listarPorId(matricula)
            if (!aluno) {
                return res.status(400).json({ msg: "O aluno não foi encontrado" })
            }
            await AlunoModel.deletarPorId(matricula)
            res.status(200).json({ msg: "Aluno deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao deletar o aluno!", erro: error.message })
        }
    }

}

module.exports = AlunoController
