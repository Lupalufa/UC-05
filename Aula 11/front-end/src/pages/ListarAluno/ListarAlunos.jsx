import React, { useEffect, useState } from "react";
import { listarTodos } from "../../service/alunoService";

function ListarAlunos(){
    const [alunos, setAlunos] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')

    // async function listarAlunos() {
    //     try {
    //         const response = await axios.get(`http://localhost:3000/aluno`);
    //         if (response) {
    //             setAlunos(response.data)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     listarAlunos()
    // }, [])

    async function listarAlunos() {
        try {
            const response = await listarTodos()
            setAlunos(response.data)
        } catch (error) {
            console.log(error)
            setAlunos([])
            setErrorMsg(error)
        }

        useEffect(() => {
            listarAlunos()
        }, [])
    }

    return (
        <div>
            <h1>Listagem de alunos</h1>
            <ul>
                {
                    alunos.map((aluno) => (
                        <li key={aluno.matricula}>
                            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListarAlunos