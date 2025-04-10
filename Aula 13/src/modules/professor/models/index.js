const { pool } = require("../../../config/database")

class ProfessorModel{
    static async criar(nome, areaAtuacao, idade, email, senha){
        const dados = [nome, areaAtuacao, idade, email, senha]
        const consulta = `insert into professor(nome, areaAtuacao, idade, email, senha)
                            values( $1, $2, $3, $4, $5 )`
        const novoProfessor = await pool.query(consulta, dados)
        return novoProfessor.rows
    }

    static async editar(id, nome, areaAtuacao, idade, email, senha){
        const dados = [id, nome, areaAtuacao, idade, email, senha]
        const consulta = `update professor set nome = $2, areaAtuacao = $3, idade = $4, email = $5, senha = $6 where id = $1`
        const professorAtualizado = await pool.query(consulta, dados)
        return professorAtualizado.rows
    }

    static async listarTodos(){
        const listar = `select * from professor`
        const professor = await pool.query(listar)
        return professor.rows
    }

    static async listarPorID(id){
        const dados = [id]
        const listar = `select * from professor where id = $1`
        const professorListado = await pool.query(listar, dados)
        return professorListado.rows
    }
    
    static async deletarTodos(){
        const deletar = `delete from professor`
        await pool.query(deletar)
    }

    static async deletarPorID(id){
        const dados = [id]
        const consulta = `delete from professor where id = $1`
        await pool.query(consulta, dados)
    }

}

module.exports = { ProfessorModel }