const TurmaModels = require("../../turma/models/turma.model")

class TurmaController {
    static async listarTurmas(req, res){
        try {
            const {cod_turma, cod_curso, turno} = req.body
            if(!cod_turma || !cod_curso || !turno){
                return res.status(400).json({msg: "Todos os cambos devem ser preenchidos corretamente"})
            }
        } catch (error) {
            
        }
    }

    static async listarTurmaPorCodigo(req, res){

    }

    static async editarTurmaPorCodigo(req, res){

    }

    static async deletarTodasTurmas(req, res){

    }

    static async deletarTurmaPorCodigo(req, res){

    }
}