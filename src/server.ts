import express from 'express'
import dotenv from 'dotenv'
import mustach from 'mustache-express'
import path from 'path'
import { router } from './routes'

dotenv.config()

const app = express()


// Configuração do motor de vizualização
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustach()) 


// Configuração da pasta publica
app.use(express.static(path.join(__dirname, '..', 'public')))

// Arquivo de rotas
app.use(router)

// Rota para quando não for encontrada nenhuma rota
app.use((request, response) => {
  response.render('pages/404')
})

app.listen(process.env.PORT, () => {
  console.log(`Server runing in port ${process.env.PORT}`)
})