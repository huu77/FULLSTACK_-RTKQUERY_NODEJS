const models = require("../models/init-models")
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')
const {privateKey,publicKey}=require('../crypto')

var arrayRefreshToken=[]
  const generateAcesstoken=(tk)=>{
  return jwt.sign({ID:tk.ID,user:tk.user,ROLE:tk.ROLE},process.env.SERECT_KEY,{
    expiresIn:"86400s"
  })
}
const generateRefreshToken=(tk)=>{
  return jwt.sign({ID:tk.ID,user:tk.user,ROLE:tk.ROLE},process.env.REFRESH_SERECT_KEY,{
    expiresIn:"86400s"
  })
}
//login tai khoan
const index = async (req, res) => {
  const user = req.body.user
  const pass = req.body.pass

  try {

    const tk = await models.TAIKHOAN.findOne({
      where: {
        NAME_TK: user
      }
    });
    
    if (!tk) res.status(404).json('not user regist, check againt user !')
    const passwordMatch = await bcrypt.compare(pass, tk.PASS);
    if(passwordMatch){
      const acesstoken= generateAcesstoken(tk)
      const refressToken=generateRefreshToken(tk)
      res.cookie("RefreshToken",refressToken,{
        httpOnly: true ,
        secure:false,
        path:'/',
        sameSite:"strict"
      })
      arrayRefreshToken.push(refressToken)
      res.status(200).json( {id:tk.ID,user:tk.NAME_TK,ROLE:tk.ROLE,acesstoken:acesstoken})
    }else{
     
      res.status(404).json('login is not success')
    }
     

  } catch (error) {
    res.json(error)
  }

}


// dang ki tai khoan , vi nhanvien da dc taoj nen chi can taoj them pass , ko can phair taoj laij taats car 
const register = async (req, res) => {
  const user = req.body.user
  const pass = req.body.pass
  const existsUser = await models.TAIKHOAN.findOne({ where: { NAME_TK: user } })

  if (existsUser) {
    res.status(400).json('Tài khoản đã tồn tại')
  } else {
    const hashedPass = await bcrypt.hash(pass, 10)
    const newUser = await models.TAIKHOAN.create({
      NAME_TK: user,
      PASS: hashedPass,
      ROLE: 'nv'
    })
    res.status(200).json({ message: 'Đăng ký thành công', user: newUser })
  }
}
//
const requetRefreshToken=async(req, res)=>{
  const refreshToken_old=req.cookies.RefreshToken
  if(!refreshToken_old){
   return  res.status(401).json('bạn chưa login')
  }
  if(!arrayRefreshToken.includes(refreshToken_old)){
    return res.status(403).json("token is not valids")
  }
  jwt.verify(refreshToken_old,process.env.REFRESH_SERECT_KEY,(err,data)=>{
    if(err){
      console.log(err)
    }
    arrayRefreshToken=arrayRefreshToken.filter((token)=>token !== refreshToken_old);
    const newAccessToken=generateAcesstoken(data)
    const newRefressToken=generateRefreshToken(data)
    arrayRefreshToken.push(newRefressToken)
    res.cookie("RefreshToken",newRefressToken,{
      httpOnly: true ,
      secure:true,
      path:'/',
      sameSite:"strict"
    })
   
    res.status(200).json({acesstoken:newAccessToken})
  })
}


const authGoogle=async(req,res,next)=>{
 res.json(newUser)
}
module.exports = { index ,register,requetRefreshToken,authGoogle}