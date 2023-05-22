const express = require('express')

const path = require('path')

// ________ Controladores ________________
const ProductController = require('./controller/ProductController')
const HomeController = require('./controller/HomeController')
const DistributorController = require('./controller/DistributorController')
const SupermercadoController = require('./controller/SupermercadoController')


// ________ Configurações Service ________
const app = express()

app.listen(8080, () => {
    console.log('Serviço Executando..... Disponível em http://localhost:8080')
    console.log('Para Finalizar, pressione CTRL + C')
})

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({
    extended:true
}))

// ________ Rotas ________________________
app.get('/', HomeController.home)
app.get('/products', ProductController.list)
app.get('/products/form', ProductController.form)
app.post('/products/create', ProductController.create)

app.get('/distributors', DistributorController.list)
app.get('/distributors/form', DistributorController.form)
app.post('/distributors/create', DistributorController.create)


app.get('/supermercado', SupermercadoController.list)


// ________ Execução _____________________