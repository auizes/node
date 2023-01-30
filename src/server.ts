import  express  from 'express'
import {Server} from 'http'
import path, { dirname } from 'path'
import mustacheExpress from 'mustache-express'
//importando as rotas
import mainRoutes from './routes/index'


//usar o EXPRESS
const server = express()

server.set('view engine','mustache')


//usando rotas
server.use(mainRoutes)

//criando a rota da publica
server.use(express.static(path.join(__dirname,'../public')))

server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustacheExpress())

server.use((req, res) =>{
    res.status(404).send("Página não encontrada")
})


//gerando o servidor na porta 3000
server.listen(3000)