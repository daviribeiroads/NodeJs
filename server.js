// //Como criar um servidor com node para rodar minha aplicação
// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//     response.write("Hello word!")

//     return response.end()
// })

// //Esse metodo eu passo a porta para minha aplicação executar
// server.listen(3333)

// Criando servidor com o fastify
import { fastify } from "fastify";

const server = fastify();

//Nessa rota, vou usar o metodo POST, para criar meus víodeos
server.post('/videos', () => {
    return 'Hello World'
})

//Com esse metodo GET, estou usando o mesmo recurso porém como metodos diferente.
server.get('/videos', () => {
    return 'Segunda rota'
})

//Essa metodo vai ser usado para atualizar meus videos atraves do id
server.put('/videos/:id', () => {
    return 'Terceira rota'
})

server.listen({
    port: 3333,
})