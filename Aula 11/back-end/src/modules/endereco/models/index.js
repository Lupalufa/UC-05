const { pool } = require("../../../config/database")
const axios = require('axios') // serve para consumir APIs Externas

class EnderecoModel {
    static async listarEnderecos(){
        const consulta = `select * from endereco`
        const resultado = await pool.query(consulta)
        return resultado.rows
    }

    static async listarEnderecos(){
        const dados = [matricula]
        const consulta = `
        select 
        a.*, e.* 
        from aluno
        join endereco on aluno.matricula = endereco.id_matricula where aluno.matricula = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }
    
    static async listarEnderecoMatricula(matricula){
        const dados = [matricula]
        const consulta = `select * from endereco where matricula = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }

    static async listarEnderecoCEP(cep){
        const dados = [cep]
        const consulta = `select * from endereco where cep = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }

    static async listarEnderecoCidade(cidade){
        const dados = [cidade]
        const consulta = `select * from endereco where localidade = $1`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }

    static async adicionarEnderecoAluno(matricula, cep, numero, ponto_referencia){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const {logradouro, complemento, bairro, localidade, uf} = resposta.data
        // const logradouro = resposta.data.logradouro
        // const complemento = resposta.data.complemento
        // const bairro  = resposta.data.bairro
        // const localidade = resposta.data.localidade
        // const uf = resposta.data.uf

        // Montando o array para a query
        const dados = [matricula, cep, numero, ponto_referencia, logradouro, complemento, bairro, localidade, uf]
        const consulta = `insert into endereco(
        id_matricula, 
        cep, 
        logradouro, 
        numero, 
        complemento,
        bairro, 
        localidade, 
        uf, 
        ponto_referencia
        )
                            values($1, $2, $5, $3, $6, $7, $8, $9, $4) returning *`
        const resultado = await pool.query(consulta, dados)
        return resultado.rows
    }

    static async editarEndereco(matricula, cep, numero, ponto_referencia){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const {logradouro, complemento, bairro, localidade, uf} = resposta.data
        const dados = [matricula, cep, numero, ponto_referencia, logradouro, complemento, bairro, localidade, uf]
        const consulta = `insert into endereco(id_matricula, cep, logradouro, numero, complemento, bairro, localidade, uf, ponto_referencia)
                            values($1, $2, $5, $3, $6, $7, $8, $9, $4) returning *`
        const dado = [matricula, cep, numero, ponto_referencia]
        const consultas = `update endereco set cep = $2, logradouro = $5, complemento = $6, numero = $3, bairro = $7, localidade = $8, uf = $9, ponto_referencia = 4$ where matricula = $1`
    }
}