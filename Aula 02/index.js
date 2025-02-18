// Importando com (ESM)
const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const port = process.env.PORTA
const app = express();

app.use(express.json());

const bancoDados = [];

app.get('/produtos', (requisicao, resposta) => {
  resposta.json(bancoDados);
});

app.get('/produtos', function (req, res) {
  try {
    if (bancoDados.length == 0) {
      return res.status(200).json({ msg: "Banco de dados esta vazio" })
    }
  } catch (error) {
    res.status(500).json({ msg: "Erro ao exibir o banco de dados", erro: error.message })
  }
})

app.post('/produtos', (requisicao, resposta) => {
  try {
    const { id, nome, preco } = requisicao.body;
    const novoProduto = { id, nome, preco };
    bancoDados.push(novoProduto);
    resposta.status(201).json({ mensagem: "Produto criado com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao enviar o banco de dados", erro: error.message })
  }
});

app.put('/produtos/:id', function (req, res) {
  try {
    const id = parseInt(req.params.id)
    const produto = bancoDados.find(produto => produto.id === id)
    if (!produto) {
      return req.status(404).json({ msg: "Parametro não encontrado" })
    }
    const { novoNome, novoPreco } = req.body
    if (produto) {
      produto.nome = novoNome
      produto.preco = novoPreco
    }
    res.status(200).json(produto)
  } catch (error) {
    res.status(500).json({ msg: "Erro ao modificar o parametro do banco de dados", erro: error.message })
  }
})


app.delete('/produtos/:id', function(req,res){
  try {
    const id = parseInt(req.params.id)
    const index = bancoDados.findIndex(elemento => elemento.id === id)
    if(index !== -1){
      bancoDados.splice(index, 1)
      res.json({msg: "Produto deletado com sucesso"})
    }
  } catch (error) {
    res.status(500).json({ msg: "Erro ao deletar o parametro do banco de dados", erro: error.message })
  }
})

app.get("/produtos/:id", function(req,res){
  try {
    const id = req.params.id
    const index = bancoDados.find(elemento => elemento.id === id)
    if(!produto){
      return res.status(404).json({msg: "Não encontrado"})
    }
    res.status(200).json(index)
  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar o/os parametro(s) do banco de dados", erro: error.message })
  }
})

app.delete("/produtos", function(req,res){
  try {
    bancoDados.length = 0
    res.status(200).json({msg: "Todos os dados do banco foram deletados com sucesso"})
  } catch (error) {
    
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
