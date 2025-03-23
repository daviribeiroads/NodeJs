//Criando um servidor para rodar minha aplicação
import { createServer } from "node:http";

const server = createServer(() => {
    console.log("Oi");
})

//Esse metodo eu passo a porta para minha aplicação executar
server.listen(3333)