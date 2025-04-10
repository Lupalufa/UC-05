import axios from "axios"

const API_ULR = import.meta.env.VITE_API_URL

export const listarTodos = async () => axios.get(`${API_ULR}/alunos`)
export const criar = async (aluno) => axios.post(`${API_ULR}/alunos`, aluno)
export const editar = async (matricula, aluno) => axios.post(`${API_ULR}/alunos/${matricula}`, aluno)
export const listarPorMatricula = async (matricula) => axios.get(`${API_ULR}/aluno/${matricula}`)
export const excluirPorMatricula = async (matricula) => axios.delete(`${API_ULR}/aluno/${matricula}`)
export const excluirTodos = async () => axios.delete(`${API_ULR}/aluno`)
export const deletar = async () => axios.post(`${API_ULR}/alunos`)


// router.get("/alunos", AlunoController.listar)

// router.get("/aluno/:matricula", AlunoController.listarPorId)

// router.post("/alunos", AlunoController.criar)

// router.put("/aluno/:matricula", AlunoController.editar)

// router.delete("/alunos", AlunoController.deletarTodos)

// router.delete("/aluno/:matricula", AlunoController.deletarPorId)