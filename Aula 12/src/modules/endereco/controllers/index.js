const EnderecoModel = require("../models/index")

class EnderecoController{
    static async listarEnderecos(req, res){
        try {
            const endereco = await EnderecoModel.listarEnderecos()
            if (endereco.length === 0) {
                return res.status(400).json({msg: "Não há nenhum endereço"})
            }
            res.status(200).json(endereco)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
            
        }
    }

    static async listarEnderecoAlunos(req,res){
        try {
            const matricula = req.params.matricula
            const endereco = await EnderecoModel.listarEnderecoAlunos()
            if (endereco.length === 0) {
                return res.status(400).json({msg: "Não há nenhum endereço"})
            }
            res.status(200).json(endereco)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
            
        }
    }

    static async listarEnderecoMatricula(req, res){
        try {
            const matricula = req.params.matricula
            const endereco = await EnderecoModel.listarEnderecoMatricula(matricula)
            if (endereco.length === 0) {
                return res.status(400).json({msg: "Não há nenhum endereço"})
            }
            res.status(200).json(endereco)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
            
        }
    }

    static async listarEnderecoCEP(req, res){
        try {
            const cep = req.params.cep
            const endereco = await EnderecoModel.listarEnderecoCEP(cep)
            if (endereco.length === 0) {
                return res.status(400).json({msg: "Não há nenhum endereço"})
            }
            res.status(200).json(endereco)
        } catch (error) {
            
        }
    }

    static async listarEnderecoCidade(req, res){
        try {
            const cidade = req.params.cidade
            const endereco = await EnderecoModel.listarEnderecoCidade(cidade)
            if (endereco.length === 0) {
                return res.status(400).json({msg: "Não há nenhum endereço"})
            }
            res.status(200).json(endereco)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
            
        }
    }

    static async adicionarEnderecoAluno(req, res){
        try {
            const { matricula, cep, numero, ponto_referencia } = req.body
            if(!matricula || !cep || !numero){
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            const endereco = await EnderecoModel.adicionarEnderecoAluno(matricula, cep, numero, ponto_referencia)
            res.status(201).json(endereco)      
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
            
        }
    }

    static async editarEndereco(req, res){
        try {
            const matricula = req.params.matricula
            const {cep, numero, ponto_referencia} = req.body
            if (!cep || !numero){
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            const enderecoAtualizado = await EnderecoModel.editarEndereco(matricula, cep, numero, ponto_referencia)
            if (enderecoAtualizado.length === 0) {
                return res.status(200).json({msg: "Não foi possivel retornar esse endereço"})
            }
            res.status(200).json({
                msg: "Endereço Atualizado com sucesso!",
                endereco: enderecoAtualizado
            })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar!", erro: error.message })
        }
    }


}

module.exports = EnderecoController