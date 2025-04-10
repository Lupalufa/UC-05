import ListarAlunos from "../../components/Aluno/ListarAluno/ListarAlunos";
import CadastrarAluno from "../../components/Aluno/CadastrarAluno/CadastrarAluno"

function GerenciarAlunos(){
    return(
        <>
            <ListarAlunos />
            <CadastrarAluno />
        </>
    ) 
}

export default GerenciarAlunos