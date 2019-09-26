require('dotenv/config')
const express = require('express')
const {port,connection_string} = process.env
const massive = require('massive')
const app = express()

app.use(express.json())

//endpoints


massive(connection_string).then(db => {
    app.set('db',db)
    app.listen(port,() =>console.log(`${port} musicians on the move`))
})
