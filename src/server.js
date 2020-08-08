//para execurar o serviro remoto no bash e so usar o comando 'npm run dev'

const proffys = [
    { name: "Diego Fernandes", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "00000000000", 
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
      subject: "Química", 
      cost: "20", 
      weekday: [0], 
      ime_from: [720], 
      time_to: [1220]
    },
    { name: "Daniele Evangelista", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "00000000000", 
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
      subject: "Química", 
      cost: "20", 
      weekday: [1], 
      ime_from: [720], 
      time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", {diego: proffys[0]}) // passando a lista de objetos proffys onde será criada dinamicamente na pagina study
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express') // quando passar o () já vai estar estanciando
const server = express()

// cinfigurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public")) //tudo que for .use("") entendesse que é uma configuracao do servidor
.get("/", pageLanding)  // definindo uma rota e usando funcao Arrow
                        //sendFile serve para passar um arquivo - __dirname e a raiz depois passa o caminho do arquivo
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500) //definindo a porta 5500 onde será executado o servidor