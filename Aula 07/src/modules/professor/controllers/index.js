const { ProfessorModel } = require("../models/index")

class ProfessorController {
    static async criar(req, res) {
        try {
            const { nome, areaAtuacao, idade, email, senha } = req.body
            const novoProfessor = await ProfessorModel.criar(nome, areaAtuacao, idade, email, senha)
            if (!nome || !areaAtuacao || !idade || !email || !senha) {
                return res.status(400).json({ msg: "Todos os campos devem ser preenchidos" })
            }
            res.status(201).json({ msg: "Professor criado com sucesso", professor: novoProfessor })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar um novo professor", erro: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const id = req.params.id
            const { nome, areaAtuacao, idade, email, senha } = req.body
            const professorAtualizado = await ProfessorModel.editar(id, nome, areaAtuacao, idade, email, senha)
            if (!id || !nome || !areaAtuacao || !idade || !email || !senha) {
                return res.status(400).json({ msg: "Todos os campos devem ser obrigatorios" })
            }
            res.status(200).json({
                msg: "Professor editado com sucesso!",
                professor: professorAtualizado
            })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar um novo professor", erro: error.message })

        }
    }

    static async listarTodos(req, res) {
        try {
            const professor = await ProfessorModel.listarTodos()
            if (professor.length === 0) {
                return res.status(400).json({ msg: "Não existe nenhum professor registrado" })
            }
            res.status(200).json(professor)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar os professores", erro: error.message })
        }
    }

    static async listarPorID(req, res) {
        try {
            const id = req.params.id
            const professor = await ProfessorModel.listarPorID(id)
            if (professor.length === 0) {
                return res.status(400).json({ msg: "Não foi possivel listar o professor solicitado" })
            }
            res.status(200).json(professor)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar o professor", erro: error.message })
        }
    }

    static async deletarTodos(req, res) {
        await ProfessorModel.deletarTodos()
        res.status(200).json({ msg: "Todos os professores foram deletados" })
    }

    static async deletarPorID(req, res) {
        const id = req.params.id
        const deletarProfessor = await ProfessorModel.listarPorID(id)
        if (!deletarProfessor) {
            return res.status(200).json({ msg: "Nâo foi possivel encontrar esse professor" })
        }
        await ProfessorModel.deletarPorID(id)
        res.status(200).json({ msg: "O professor foi deletado com sucesso" })
    }

}

module.exports = ProfessorController