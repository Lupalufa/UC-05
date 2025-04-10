import React, { useState } from "react";
import { criar } from "../../../service/alunoService"

function CadastrarAluno() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMsg, setErrorMsg] = useState('');
    const [sucessoMsg, setSucessoMsg] = useState('');

    async function criarAluno() {
        try {
            await criar({ nome, matricula, email, senha })
            setSucessoMsg('Aluno Cadastrado com sucesso')
            setErrorMsg('')
        } catch (error) {
            setErrorMsg(error.response.data.msg)
        }
    }


    return (
        <div>
            <h2>Cadastrar Aluno</h2>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome"
            />
            <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                placeholder="Digite a matricula"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o Email"
            />
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite a senha"
            />

            <button onClick={criarAluno}>Enviar</button>
            {erroMsg && <p>{erroMsg}</p>}
            {sucessoMsg && <p>{sucessoMsg}</p>}
        </div>
    )
}


export default CadastrarAluno