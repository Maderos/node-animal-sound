const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    console.log(name)

    if(name=='dog') {
        res.json({'sound': 'mung'})
    } else if(name=='cat') {
        res.json({'sound': 'yaong'})
    } else if(name=='pig') {
        res.json({'sound': 'kkul'})
    } else {
        res.json({'sound': 'unkooooon'})
    }

})

app.listen(3000)