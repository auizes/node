import  express  from 'express'
import {Server} from 'http'

//usar o EXPRESS
const server = express()


server.get('/',(req,res) =>{
    res.send("Gustavo oi!")
})


server.get('/sobrenos',(req,res) =>{
    res.send("walle!")
})


server.get('/cachorromorreu',(req,res) =>{
    res.send("Noticia!")
})

//rota dinamica
server.get('/noticia/:slung',(req,res) =>{
    let slung: string = req.params.slung
    res.send(`Noticia: ${slung}`)
})


server.get('/voo/:origem-:destino',(req,res) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} ate ${destino}`)
    
})







//gerando o servidor na porta 3000
server.listen(3000)