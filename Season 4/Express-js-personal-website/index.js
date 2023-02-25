const express = require('express')
const app = express()
const router = require('./router/routs')
const port = 3000

app.use('/', router)

app.use((req, res) => {
  res.status(404).send('mimiri mesl adam request bezani??')
})

app.use((err, req, res, next) => { // error handling
  console.error(err.stack)
  res.status(500).send('500 yani ridam vali nemidoonam koja!')
})

app.listen(port, (req, res) => {
  console.log('server balaaaaa')
})
