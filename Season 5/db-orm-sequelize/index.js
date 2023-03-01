const express = require('express')
const port = 3000
const app = express()
const morgan = require('morgan')
const router = require('./router/routs')
const badReq = require('./router/badReqHandler')

app.use(morgan('dev'))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use('/', router)

app.use('/', badReq)

app.listen(port, () => { console.log('server running') })
