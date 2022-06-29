import express from 'express'
const  app=express()
let products=[]
app.use(express.urlencoded({extended: true}))
app.set('views', './views');
app.set('view engine','ejs')



app.get('/products', (req,res)=>{
    res.render('table',{products})
})
app.get('/', (req,res)=>{
    res.render('main')
})
app.post('/products',(req,res)=>{

products.push(req.body)
    console.log(products)
    res.redirect('/')
})


const PORT=8085
const server=app.listen(PORT,()=>{
    console.log(`Server listening o port ${PORT}`)
})
server.on('error' ,error=>console.log(`Error in the server ${error}`))