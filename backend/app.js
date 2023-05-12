const express =require('express');
const cors= require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const app=express();
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true
}))
app.use(cookieParser())
//crud
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const route=require('./routers')
route(app)
const port =process.env.PORT 
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })