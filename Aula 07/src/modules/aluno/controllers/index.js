const AlunoModel = require("../models/index")


class AlunoController{
    static async criar(req,res) {
        try {
            const {matricula, nome, email, senha } = req.body
            const novoAluno = await AlunoModel.criar(matricula, nome, email, senha)
            res.status(400  ).json({msg: "Aluno criado com sucesso", aluno: novoAluno})
        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o aluno!", erro: error.message})
        }
    }

    static editar(req,res){
        try {
            
        } catch (error) {
            
        }
    }
    
    static async listar(req,res){
        try {
            const alunos = await AlunoModel.listar()
            if(alunos.listar === 0){
                return res.status(400).json({msg: "Não foi encontrado nenhum aluno"})
            }
            res.status(200).json(alunos)
        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o aluno!", erro: error.message})
        }
    }

    static async listarPorId(req,res){
        try {
            const matricula = req.params.matricula
            const aluno = await AlunoModel.listarPorId(matricula)
            if(!aluno){
                return res.status(400).json({msg: "Não foi possivel listar o aluno solicitado"})
            }
            res.status(200).json({msg: ""})
        } catch (error) {
            
        }
    }

    static async deletarTodos(req,res){
        try {
            
        } catch (error) {
            
        }
    }

    static async deletarPorId(req,res){
        try {
            
        } catch (error) {
            
        }
    }

}