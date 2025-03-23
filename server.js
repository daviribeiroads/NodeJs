// Criando servidor com o fastify
import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const database = new DatabaseMemory()

//Nessa rota, vou usar o metodo POST, para criar meus víodeos
server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()

})
   

//Com esse metodo GET, estou usando o mesmo recurso porém como metodos diferente.
server.get('/videos', () => {
    const videos = database.list()

    return videos
})

//Essa metodo vai ser usado para atualizar meus videos atraves do id
server.put('/videos/:id', () => {
    return 'Terceira rota'
})

//Delete o video
server.delete('/videos/:id', () => {
    
})

server.listen({
    port: 3333,
})