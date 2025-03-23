// Criando servidor com o fastify
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

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