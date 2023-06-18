const express = require('express');
const router = express.Router();
const login = require('../controller/loginController');
const jwt = require('jsonwebtoken')
const passport = require('passport')
const Midelware = require('../midleware/loginPassport')

let userData=null;
router.post('/register', login.register);
router.post('/login', login.index);
router.get('/refresh', login.requetRefreshToken);


// login google with passport
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', {
    failureMessage: 'login faile',
    failWithError: 'http://localhost:5173/login',

}), async (req, res) => {
    if(req.user){
        userData = req.user;
        const token = jwt.sign(req.user.toJSON(), process.env.SERECT_KEY, {
            expiresIn: "86400s"
        })
        res.setHeader('Authorization', `Bearer ${token}`);
        
        res.redirect('http://localhost:5173/loginSuccess');
       
    }
   else{
    userData=null
   }
  
}
);
router.get("/login/success", (req, res) => {
    
    try {
        
        if ( req.session) {
            
            res.status(200).json(userData);
          
        } else {
            // User is not logged in
            res.status(200).json(null);
        }
    } catch (error) {
        res.status(400).json(error);
    }

     
});
router.get('/logout',(req, res)=>{

req.logout(() => {
    req.session=null
    userData=null
    res.status(200).json(req.session)
  });

})


 




//login facebook
router.get('/auth/facebook',
    passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        failureMessage: 'login faile',
        failWithError: 'http://localhost:5173/login',
        successRedirect: 'http://localhost:5173/loginSuccess',
    }),
    login.authFacebook);
module.exports = router;
