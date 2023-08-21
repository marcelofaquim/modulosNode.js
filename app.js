var http = require('http') // permite que eu crie aplicações web

http.createServer(function(req, res){ //"RES" = mandar mensagem para quem acessa seu Servidor 
    res.end("Olá") // Evitar colocar acemtuação para não bugar

}).listen(8081) //função que abre um servidor web. Função "Listen" (fala sobre qual porta de rede eu quero abrir meu servidor)

console.log("O servidor esta funcionado!")

//Acessar o servidor digitar na barra do navegador ("localhost:8081")