const jwt =require('jsonwebtoken');
 
 
const midlewareControll={
    //veryfyToken
   verifyToken : (req, res, next) => {
        const token = req.headers.token;
        if (token) {
          const accessToken = token.split(' ')[1];
          jwt.verify(accessToken, process.env.SERECT_KEY, (err, data) => {
            if (err) {
              res.status(403).json({ error: err });
            } else {
              req.data = data;
              next();
            }
          });
        } else {
          res.status(401).json({ error: "you're not authenticated" });
        }
        
      },

    verifyAdmin:(req,res,next)=>{
midlewareControll.verifyToken(req,res,()=>{
  if(req.data.ROLE=='admin'){
    next()
  }else{
    res.status(400).json("ban ko co quyen admin")
  }
})
    }
}
module.exports=midlewareControll