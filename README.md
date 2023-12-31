Documentação da API do Blog_do_alisson
________________________________________
Introdução
Esta API permite a gestão de usuários e posts para um sistema de blog_do_alisson simples.
________________________________________
Base URL
<http://localhost:8081/>
________________________________________
Endpoints
Usuários

1. Criar um usuário
• URL: /usuario
• Método: POST
• Body:
{
    "nome": "chaves",
    "email": " <chaves@limao.com.br>"
}
• Resposta de Sucesso:
{
"id": 1,
"nome": "chaves",
"email": " <chaves@limao.com.br> ",
"createdAt": "2023-08-14T20:40:02.000Z",
"updatedAt": "2023-08-14T20:40:02.000Z"
}

2. Listar todos os usuários
• URL: /usuarios
• Método: GET
• Resposta de Sucesso:
[
{
"id": 2,
"nome": "Michel telo",
"email": "michel@telo.com.br",
"createdAt": "2023-08-14T20:42:16.000Z",
"updatedAt": "2023-08-14T20:42:16.000Z"
},

{
"id": 1,
"nome": "chaves",
"email": " <chaves@limao.com.br> ",
"createdAt": "2023-08-14T20:40:02.000Z",
"updatedAt": "2023-08-14T20:40:02.000Z"
}
]
3. Obter um usuário pelo ID
• URL: /usuarios/:id
• Método: GET
• Resposta de Sucesso:

   {
"id": 2,
"nome": "Michel telo",
"email": " <michel@telo.com.br> ",
"createdAt": "2023-08-14T20:42:16.000Z",
"updatedAt": "2023-08-14T20:42:16.000Z"
},

Posts

1. Criar um post
• URL: /posts
• Método: POST
• Body:
{
"titulo":"o sapo nao lava o pé",
"conteudo":"<porque@naoquer.com.br>",
"autor_id": 2
}
• Resposta de Sucesso:
[
{
"id": 2,
"titulo": "o sapo nao lava o pé",
"conteudo": " porque@naoquer.com.br ",
"autor_id": 2,
"createdAt": "2023-08-14T20:52:43.000Z",
"updatedAt": "2023-08-14T20:52:43.000Z"
},
{
"id": 1,
"titulo": "pato feio mesmo",
"conteudo": "patinho@feio.com.br",
"autor_id": 1,
"createdAt": "2023-08-14T20:51:44.000Z",
"updatedAt": "2023-08-14T20:51:44.000Z"
}
]
2. Listar todos os posts
• URL: /posts
• Método: GET
• Resposta de Sucesso:
[
    {
"id": 1,
"titulo": "pato feio mesmo",
"conteudo": " patinho@feio.com.br ",
"autor_id": 1,
"createdAt": "2023-08-14T20:51:44.000Z",
"updatedAt": "2023-08-14T20:51:44.000Z"
    },

    {
"id": 2,
"titulo": "o sapo nao lava o pé",
"conteudo": " <porque@naoquer.com.br> ",
"autor_id": 2,
"createdAt": "2023-08-14T20:52:43.000Z",
"updatedAt": "2023-08-14T20:52:43.000Z"
    },

]
3. Obter um post pelo ID
• URL: /posts/:id
• Método: GET
• Resposta de Sucesso:
{
"id": 1,
"titulo": "pato feio mesmo",
"conteudo": " <patinho@feio.com.br> ",
"autor_id": 1,
"createdAt": "2023-08-14T20:51:44.000Z",
"updatedAt": "2023-08-14T20:51:44.000Z"
}
