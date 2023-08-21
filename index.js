const express = require("express") //Cons não deixa eu criar uma variavel com o mesno nome, deixa minha aplicação mais segura
const app = express()

// Criando uma rota, que vai ser a principal da aplicação e não ira mais aparecer o erro "connot Get"

app.get("/", function(req, res){
    //res.send("Bem vindo ao meu app!") // paramentro de resposta, serve para enviar mensagem
    res.sendFile(__dirname + "/html/index.html")// varialve retorna o diretoria da minha aplicação
})


//criando um caminho novo exemplo www.historias.com.nr/"sobre", esse sobre é o caminho novo
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/contato", function(req,res){
    res.send("Bem vindo a minha pagina de contato")
})


//Criando um paramentro, para que o usuario possa colocar um valor. Posso colocar quantos paramentros eu quiser
app.get("/ola/:nome/:cargo", function(req, res){

// aparece uma tabela, com as requisões que foram feitos
// só posso chamar a tag (res.send), uma unica vez
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo é: " + req.params.cargo + "</h2>")
     
})



app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
}) // sempre deixar essa aplicação por ultimo para evitar qualquer tipo de erro

