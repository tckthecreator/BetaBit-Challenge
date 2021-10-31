# BetaBit-Challenge
#### by Victor Santos

> Esse é meu projeto de um desafio para vaga back-end, onde é exigido que se faça um crud com cadastro de nome, email, celular, data de nascimento e foto de um usuário.

## Tecnologias Utilizadas
- NodeJS
- NestJS
- Postgresql
- Prisma
- Banco de dados na nuvem ( Heroku Postgres)

# Como instalar?

1° Passo - Clone o repositório localmente no diretório desejado.
```
git clone https://github.com/tckthecreator/BetaBit-Challenge.git
```

2° Passo - Com o seu gerenciador de pacotes favorito, instale todas as dependências.
```
npm install
```

3° Passo - Inicie o servidor e acesse http://localhost:3000 para receber informações sobre as API Paths disponíveis
```
npm start
``'

4° Passo - Atualize o prisma
```
npx prisma generate
```

# Usando o Postman 
> O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.

1° Passo - Baixe o Postman Desktop pelo link oficial (https://www.postman.com) e instale o Postman. Após a instalação abrir o Postman e acessar esse link (https://identity.getpostman.com/login)

1.2° Passo - Lembre de registar uma conta ou dar login pelo Google

2° Passo - Localize "Start with something new" e clique no botão "Create New"

3° Passo - No menu, escolha a opção "Http Request"

## Agora, vamos criar um novo usuário?

1° Passo - No botão dropdown, troque "GET" por "POST"

2° Passo - No "Enter Request URL" cole
```
localhost:3000/users/create
```

3° Passo - No menu abaixo do input, clique em "Body" e logo abaixo clique em "x-www-form-url-encoded"

4° Passo - Em "Keys" você adicionará os campos e em "Values" os valores

4.2° Passo - Lembre que os campos são: nome, email, celular, dataDeNascimento e foto

5° Passo - Após adicionar todos os campos, clique no botão "Send", na área "Responde" deverá ser retornado um Código 201 e os valores criados.

## Conferindo os usuários já cadastrados no banco de dados

1° Passo - Mude o "POST" para "GET"

2° Passo - No "Enter Request URL" cole
```
localhost:3000/users
```

3° Passo - Agora só apertar o botão "Send" e aguardar os usuários na área "Response"

## Está procurando um usuário específico?

1° Passo - No "Enter Request URL" cole
```
localhost:3000/users/
```

2° Passo - Após o / digite o ID do usuário

3° Passo - Clique no botão "Send" e aguarde a resposta na área "Response"

## Quer atualizar algum dado do usuário?

1° Passo - Troque o "GET" por "PATCH"

2° Passo - No "Enter Request URL" cole
```
localhost:3000/users/update/
```

3° Passo - Após o / digite o ID do usuário que será atualizado

4° Passo - No menu abaixo do input, clique em "Body" e logo abaixo clique em "x-www-form-url-encoded"

5° Passo - Em "Keys" você adicionará os campos e em "Values" os valores que você deseja alterar

5.2° Passo - Lembre que os campos são: nome, email, celular, dataDeNascimento e foto. OBS: Não é necessário que seja todos os campos

## Gostaria de deleter algum usuário?

1° Passo - Troque o "PATCH" por "DELETE"

2° Passo - No "Enter Request URL" cole
```
localhost:3000/users/delete/
```
3° Passo - Após o / digite o ID do usuário que será deletado

4° Passo - Agora só apertar o botão "Send"
