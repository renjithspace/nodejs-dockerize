const express = require('express')

const app = express()
const port = 8080
const host = '0.0.0.0'

app.get('/', (req, res) => {
  res.send('Hello world\n')
})

app.listen(port, host, () => console.log(`Running on port ${port}`))