const express = require('express')
const frontRouter = require('./routes/front.js')

const app = express()
// const PORT = process.env.PORT || 

app.use(express.json())
app.use(frontRouter)

app.listen(5000, ()=>{
    console.log('Front server is up and running on port:'+ 5000)
})