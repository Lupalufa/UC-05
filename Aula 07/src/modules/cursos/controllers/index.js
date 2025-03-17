const { CursoModel } = require("../models/index")

class CursoController {
    static async criar(req, res) {
        try {
            const { nomeCurso, modalidade, dataInicio } = req.body
            const novoCurso = await CursoModel.criar(nomeCurso, modalidade, dataInicio)
            res.status(201).json({ msg: "Curso criado com sucesso" })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar um novo curso", erro: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const id = req.params.id
            const { nomeCurso, modalidade, dataInicio } = req.body
            const cursoAtualizado = await CursoModel.editar(id, nomeCurso, modalidade, dataInicio)
            if (!id || !nomeCurso || !modalidade || !dataInicio) {
                return res.status(400).json({ msg: "Todos os campos devem ser obrigatórios." })
            }
            res.status(200).json({
                msg: "Curso atualizado com sucesso!",
                curso: cursoAtualizado
            })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar um novo curso", erro: error.message })
        }
    }

    static async listarTodos(req, res) {
        try {
            const cursos = await CursoModel.listarTodos()
            if (cursos.listar === 0) {
                return res.status(400).json({ msg: "Não existe nenhum curso registrado" })
            }
            res.status(200).json(cursos)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar cursos", erro: error.message })
        }
    }

    static async listarPorID(req, res) {
        try {
            const id = req.params.id
            const curso = await CursoModel.listarPorID(id)
            if (!curso) {
                return res.status(400).json({ msg: "Não foi possivel listar o curso solicitado" })
            }
            res.status(200).json(curso)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar o curso!", erro: error.message })
        }
    }

    static async deletarTodos(req, res) {
        try {
            await CursoModel.deletarTodos()
            res.status(200).json({ msg: "Todos os cursos foram deletados" })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao deletar os cursos!", erro: error.message })
        }
    }

    static async deletarPorID(req, res) {
        try {
            const id = req.params.id
            const curso = await CursoModel.listarPorID(id)
            if (!curso) {
                return res.status(400).json({ msg: "Esse curso não foi encontrado" })
            }
            await CursoModel.deletarPorID(id)
            res.status(200).json({ msg: "Curso deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao deleta o curso!", erro: error.message })
        }
    }
}

module.exports = CursoController
