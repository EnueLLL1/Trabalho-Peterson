const express = require('express')
const path = require('path')
const app = express()
const PORT = 8081

// 1️⃣ Rota /bemvindo
app.get('/bemvindo', (req, res) => {
  res.send(`
        <h1>Bem-vindo ao meu servidor Express!</h1>
    `)
})

// 2️⃣ Rota /mensagem/:texto
app.get('/mensagem/:texto', (req, res) => {
  const texto = req.params.texto
  res.send(`<h2>${texto}</h2>`)
})

// 3️⃣ Rota /dobro/:numero
app.get('/dobro/:numero', (req, res) => {
  const numero = parseFloat(req.params.numero)
  if (isNaN(numero)) {
    return res.send('Por favor, envie um número válido.')
  }
  const dobro = numero * 2
  res.send(`O dobro de ${numero} é ${dobro}`)
})

// 4️⃣ Rota /idade/:anoNascimento
app.get('/idade/:anoNascimento', (req, res) => {
  const anoNascimento = parseInt(req.params.anoNascimento)
  const anoAtual = new Date().getFullYear()
  if (isNaN(anoNascimento) || anoNascimento > anoAtual) {
    return res.send('Ano de nascimento inválido.')
  }
  const idade = anoAtual - anoNascimento
  res.send(`Você tem ${idade} anos de idade em ${anoAtual}.`)
})

// 5️⃣ Rota /saudacao/:nome/:periodo
app.get('/saudacao/:nome/:periodo', (req, res) => {
  const nome = req.params.nome
  const periodo = req.params.periodo.toLowerCase()

  const saudacoes = {
    manha: `Bom dia, ${nome}!`,
    tarde: `Boa tarde, ${nome}!`,
    noite: `Boa noite, ${nome}!`,
  }

  const mensagem = saudacoes[periodo] || 'Período inválido.'
  res.send(mensagem)
})

// 6️⃣ Rota /tabuada/:numero
app.get('/tabuada/:numero', (req, res) => {
  const numero = parseInt(req.params.numero)
  if (isNaN(numero)) {
    return res.send('Por favor, envie um número válido.')
  }

  let html = `<h2>Tabuada do ${numero}</h2><ul>`
  for (let i = 1; i <= 10; i++) {
    html += `<li>${numero} x ${i} = ${numero * i}</li>`
  }
  html += `</ul>`
  res.send(html)
})

// 7️⃣ Rota /usuario/:nome/:idade/:cidade
app.get('/usuario/:nome/:idade/:cidade', (req, res) => {
  const { nome, idade, cidade } = req.params
  res.send(`
        <div style="font-family: Arial; border: 2px solid #333; padding: 20px; max-width: 300px; margin: 20px auto; border-radius: 10px;">
            <h1>Perfil</h1>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
        </div>
    `)
})

// 8️⃣ Rota /media/:n1/:n2/:n3
app.get('/media/:n1/:n2/:n3', (req, res) => {
  const n1 = parseFloat(req.params.n1)
  const n2 = parseFloat(req.params.n2)
  const n3 = parseFloat(req.params.n3)

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return res.send('Envie três números válidos.')
  }

  const media = (n1 + n2 + n3) / 3
  let resultado

  if (media >= 7) {
    resultado = 'Aprovado'
  } else if (media >= 3) {
    resultado = 'Recuperação'
  } else {
    resultado = 'Reprovado'
  }

  res.send(`
        Média: ${media.toFixed(2)}<br>
        Situação: <strong>${resultado}</strong>
    `)
})

// 9️⃣ Rota /arquivo - envia um arquivo HTML
// Primeiro, crie o arquivo pagina.html na mesma pasta
app.get('/arquivo', (req, res) => {
  res.sendFile(path.join(__dirname, 'pagina.html'))
})

// 🔟 Rota /aleatorio
app.get('/aleatorio', (req, res) => {
  const numero = Math.floor(Math.random() * 100) + 1
  res.send(`<h1>Número aleatório: ${numero}</h1>`)
})

// Rota inicial
app.get('/', (req, res) => {
  res.send(`
        <h1>Servidor Express rodando!</h1>
        <p>Teste as rotas acima. Exemplo: /bemvindo, /dobro/5, /saudacao/Julia/manha</p>
    `)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
