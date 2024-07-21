const express = require('express')
const app = express()
const router = require('./routes/routes')
const connectDB = require('./lib/db')
const PORT = 2000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()

//app.use(express.urlencoded(extends:true))
app.use('/',router)

app.listen(PORT,()=>{console.log(`Server started at http://127.0.0.1:${PORT}`)})
