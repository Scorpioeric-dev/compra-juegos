require('dotenv/config')
const express = require('express')
const {port,connection_string,session_secret} = process.env
const massive = require('massive')
const session = require('express-session')
const app = express()
const authCtrl = require('./authController')

app.use(express.json())
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: session_secret
}))

//endpoints
app.post('/auth/register',authCtrl.register)


massive(connection_string).then(db => {
    app.set('db',db)
    app.listen(port,() =>console.log(`${port} lowriders cruising the Blvd`))
})
