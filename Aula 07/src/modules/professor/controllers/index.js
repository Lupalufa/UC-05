const ProfessorModel = require("../models/index")

class ProfessorController{
    static async criar(req,res){
        const { nome, areaAtuacao, idade, email, senha} = req.body
        const novoProfessor = await ProfessorModel.criar(nome, areaAtuacao, idade, email, senha)
        if(!nome || !areaAtuacao || !idade || !email || !senha){
            return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
        }
        res.status(201).json({msg: "Professor criado com sucesso", professor: novoProfessor})
    }

    static async editar(req, res){

    }

    static async listarTodos(req,res){

    }

    static async listarPorID(req, res){

    }

    static async deletarTodos(req, res){

    }

    static async deletarPorID(req, res){

    }

}