//Como criar um servidor com node para rodar minha aplicação
import { createServer } from "node:http";

const server = createServer((request, response) => {
    response.write("Hello word!")

    return response.end()
})

//Esse metodo eu passo a porta para minha aplicação executar
server.listen(3333)