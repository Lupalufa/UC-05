const { pool } = require("../../../config/database")

class CursoModel {
    static async criar(nomeCurso, modalidade, dataInicio){
        const dados = [nomeCurso, modalidade, dataInicio]
        const consulta = `insert into curso(nomeCurso, modalidade, dataInicio)
                            values($1, $2, $3, $4)`
        const novoCurso = await pool.query(consulta, dados)
        return novoCurso.rows
    }

    static async editar(id ,nomeCurso, modalidade, dataInicio){
        const dados = [id ,nomeCurso, modalidade, dataInicio]
        const consulta = `update curso set nomeCurso = $2, modalidade = 3, dataInicial = $4 where id = $1`
        const cursoAtualizado = await pool.query(consulta, dados)
        return cursoAtualizado.rows
    }

    static async listarTodos(){
        const consulta = `select * from curso`
        const listar = await pool.query(consulta)
        return listar.rows
    }

    static async listarPorID(id){
        const dados = [id]
        const consulta = `select * from curso where id = $1`
        const listar = await pool.query(consulta, dados)
        return listar.rows
    }

    static async deletarTodos(){
        const consulta = `delete from curso`
        await pool.query(consulta)
    }

    static async deletarPorID(id){
        const dados = [id]
        const consulta = `delete from curso where id = $1`
        await pool.query(consulta, dados)
    }
}

module.exports = { CursoModel }