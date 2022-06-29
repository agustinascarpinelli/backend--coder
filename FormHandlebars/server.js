import express from 'express'
const  app=express()
const handlebars=require('express-handlebars')
let products=[]
app.use(express.urlencoded({extended: true}))
app.engine('hbs' , 
handlebars.engine({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir:__dirname + '/views/layout/',
    partialsDir:__dirname + '/views/partial'
}))

app.set('view engine','hbs')
app.set ('views', './views')


app.get('/products', (req,res)=>{
    res.render('table',{products:products})
})
app.get('/', (req,res)=>{
    res.render('main')
})
app.post('/products',(req,res)=>{

products.push(req.body)
    console.log(products)
    res.redirect('/')
})


const PORT=8080
const server=app.listen(PORT,()=>{
    console.log(`Server listening o port ${PORT}`)
})
server.on('error' ,error=>console.log(`Error in the server ${error}`))