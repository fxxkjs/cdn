const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const port = 60000

app.use(compression())
app.use(express.static(path.join(__dirname, 'cdn'), {
    maxage: '1y'
}))

app.listen(port, () => {
    console.log(`cdn.js: ${port}`)
})