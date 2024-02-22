const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors())
app.use(express.json())
const colors = require('colors')
const connectdb = require('./Databaseconnection.js/db')
connectdb()



const empRouter = require('./routes/addnewEmprouter')
app.use(empRouter)
app.use('/imgupload',express.static('./upload'))

const Port = 8000;

app.listen(Port,()=>{
   console.log(`server start on  port number ${Port}`.blue);
})