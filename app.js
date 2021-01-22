const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const router = require('./router')


app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)
let port = process.env.PORT
if(port == null || port == "")
{
  port = 8000
}
app.listen(port)
module.exports = app

