const express =require('express');
const cors= require('cors');
const cookieParser = require('cookie-parser')
const passport=require('passport')
require('./midleware/loginPassport')
require('dotenv').config();
const session = require('express-session');
const app=express();
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true
}))
app.use(cookieParser())
app.use(session({
    secret: 'your-secret-key', // Replace with your own secret key
    resave: false,
    saveUninitialized: false
  }));
//crud
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
app.use(passport.session())
const route=require('./routers')
route(app)
const port =process.env.PORT 
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })