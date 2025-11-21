1️⃣ Crie um servidor Express que tenha uma rota /bemvindo

A rota deve retornar um HTML simples escrito diretamente no res.send() com uma mensagem de boas-vindas e uma cor de fundo.

2️⃣ Crie uma rota /mensagem/:texto

Receba um texto pela URL e retorne esse texto dentro de uma tag <h2>.

Exemplo:
localhost:8081/mensagem/boa-noite
Resposta: <h2>boa-noite</h2>

3️⃣ Crie uma rota /dobro/:numero

A rota deve pegar o número recebido, calcular o dobro e retornar a mensagem:
"O dobro de X é Y".

4️⃣ Crie uma rota /idade/:anoNascimento

Calcule a idade da pessoa com base no ano de nascimento enviado como parâmetro.

5️⃣ Crie uma rota /saudacao/:nome/:periodo

O período pode ser: manha, tarde ou noite.
Retorne:

Bom dia, NOME!
Boa tarde, NOME!
Boa noite, NOME!

Caso o período não seja válido, informe:
Período inválido.

6️⃣ Crie uma rota /tabuada/:numero

A rota deve exibir a tabuada do número de 1 a 10, montada com HTML simples.

7️⃣ Crie uma rota /usuario/:nome/:idade/:cidade

Retorne um mini cartão HTML com:

<h1>Perfil</h1>
Nome:
Idade:
Cidade:

8️⃣ Crie uma rota /media/:n1/:n2/:n3

Calcule a média dos 3 números e retorne se o aluno está:

Aprovado (média ≥ 7)
Recuperação (média entre 3 e 7)
Reprovado (média < 3)

9️⃣ Crie uma rota /arquivo que envie um HTML

Crie um arquivo pagina.html com uma mensagem simples e envie-o usando res.sendFile().

🔟 Crie uma rota /aleatorio

Retorne um número aleatório de 1 a 100 usando <h1>.