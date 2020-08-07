const express = require('express') // quando passar o () já vai estar estanciando
const server = express()
server.use(express.static("public")) //tudo que for .use("") entendesse que é uma configuracao do servidor
.get("/", (req, res) => { // definindo uma rota e usando funcao Arrow
//sendFile serve para passar um arquivo - __dirname e a raiz depois passa o caminho do arquivo
    return res.sendFile(__dirname + "/views/index.html") 
})
.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500) //definindo a porta 5500 onde será executado o servidor