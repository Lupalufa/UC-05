const express = require("express")
const dotenv = require("dotenv")
const { pool } = require("./src/config/database")

dotenv.config();

const port = process.env.PORTA
const app = express();

app.use(express.json());

app.get('/produtos', (req, res) => {
  res.json(bancoDados);
});

app.get('/produtos', async function (req, res) {
  try {
    const consulta = `select * from produto`
    const buscando = await pool.query(consulta)
    if (buscando.rows.length == 0) {
      return res.status(200).json({ msg: "Banco de dados esta vazio" })
    }
    res.status(200).json(buscando.rows)
  } catch (error) {
    res.status(500).json({ msg: "Erro ao exibir o banco de dados", erro: error.message })
  }
})

app.post('/produtos', async (req, res) => {
  try {
    const {nome, preco, quantidade} = req.body;
    const novoProduto = [ nome, preco, quantidade ];
    const consulta = `insert into produto(nome,preco,quantidade) 
                        values($1, $2, $3) returning *`
    await pool.query(consulta, novoProduto)
    res.status(201).json({ mensagem: "Produto criado com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao enviar o banco de dados", erro: error.message })
  }
});

app.put('/produtos/:id', async function (req, res) {
  try {
    const id = parseInt(req.params.id)
    if (!id) {
      return req.status(404).json({ msg: "Parametro não encontrado" })
    }
    const parametro = [id]
    const consulta = `select * from produto where id = $1`
    const resultado = await pool.query(consulta, parametro)
    if (resultado.rows) {
        const dados = [id, novoNome, novoPreco, novaQuantidade]
        const update = `update produto set nome = $2, preco = $3, quantidade = $4 where id = $1 returning *`
    }

    res.status(200).json(produto)
  } catch (error) {
    res.status(500).json({ msg: "Erro ao modificar o parametro do banco de dados", erro: error.message })
  }
})


app.delete('/produtos/:id', async function(req,res){
  try {
    const id = req.params.id
    const parametro = [id]
    const consulta =  `select * from produto where id = $1`
    const resultado = await pool.query(consulta, parametro)
    if(resultado.rows.length === 0){
        return res.status(404).json({msg: "Produto não encontrado"})
    }
    const parametros = [id]
    const consultas = 
    const resultados = `delete from produto where id = $1`
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
