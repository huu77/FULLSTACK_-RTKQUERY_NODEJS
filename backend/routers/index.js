const nhanvien=require('./nhanvien')
const login =require('./login')
const product=require('./product')
function route(app){
    // app.use('/login',loginRoute)
    app.use('/' ,nhanvien)
    app.use('/',login)
    app.use('/',product)
}
 
module.exports=route