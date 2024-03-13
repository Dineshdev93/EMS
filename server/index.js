const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors())
app.use(express.json())
const colors = require('colors')
const connectdb = require('./Databaseconnection.js/db')
connectdb()



const empRouter = require('./routes/employee/employeeRoutes')
app.use('/employees/api', empRouter)
app.use('/imgupload',express.static('./upload'))

// adminregister
const adminrouter = require('./routes/admin/adminauthroutes')
app.use('/adminauth/api',adminrouter)

const Port = 8000;

app.listen(Port,()=>{
   console.log(`server start on  port number ${Port}`.blue);
})