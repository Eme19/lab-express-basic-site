

const express = require('express');
 const path = require('path')
const app = express()
const port = 5000


 app.use('/',express.static(path.join(__dirname,'public')));


app.get('/text.html',(req, res) => {
    res.sendFile(`${__dirname}/public/html/text.html`)
})

app.get('/about.html',(req, res) => {
    res.sendFile(`${__dirname}/public/html/about.html`)
})


app.listen(port, () => {
    console.log(`examp app listening on port ${port} `)
})
