const { pool } = require("../../../config/database")

class AlunoModel {
    static async criar(matricula, nome, email, senha) {
        const dados = [matricula, nome, email, senha]
        const consulta = `insert into aluno(matricula, nome, email, senha)
                            values($1, $2, $3, $4) returning *`
        const novoAluno = await pool.query(consulta, dados)
        return novoAluno.rows
    }

    static editar(matricula, nome, email, senha){
        const dados = [matricula, nome, email, senha]
        const consulta = `update aluno set nome = $2, email = $3, senha = $4 where matricula = $1 returning *`
        const alunoAtualizado = pool.query(consulta, dados)
        return alunoAtualizado.rows
    }
    
    static async listar(){
        const consulta = `select * from aluno`
        const alunos = await pool.query(consulta)
        return alunos.rows
    }

    static async listarPorId(matricula){
        const dado = [matricula]
        const consulta = `select * from aluno where matricula = $1`
        const alunos = await pool.query(consulta, dado)
        return alunos.rows
    }

    static async deletarTodos(){
        const consulta = `delete from aluno`
        await pool.query(consulta)
    }

    static async deletarPorId(matricula){
        const dado = [matricula]
        const consulta = `delete from aluno where matricula = $1`
        await pool.query(consulta, dado)
    }


}

module.exports = { AlunoModel }