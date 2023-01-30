import {Router, Request, Response} from 'express'


const router = Router()

router.get('/contato',(req: Request,res: Response) =>{
    res.render("contato")
})


router.get('/idade',(req: Request,res: Response) =>{
    res.render("idade")
    let idade: number = 18
    let mostrarIdade: boolean = false

    if (idade >= 18){
        mostrarIdade = true
    }

  

    res.render("idade",{
       nome: "ciclano",
       mostrarIdade,
       products:[
        'mouse',
        'leite',
       ]
        
    })
    
})


router.get('/cachorromorreu',(req: Request,res: Response) =>{
    res.send("Noticia!")
})

//rota dinamica
router.get('/noticia/:slung',(req: Request,res: Response) =>{
    let slung: string = req.params.slung
    res.send(`Noticia: ${slung}`)
})


router.get('/voo/:origem-:destino',(req: Request,res: Response) =>{
    let {origem, destino} = req.params
    res.send(`Procurando voos de ${origem} ate ${destino}`)
    
})
//exportando o arquivo index
export default router