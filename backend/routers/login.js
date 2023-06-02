const express = require('express');
const router = express.Router();
const login= require('../controller/loginController');
const passport= require('passport')
const Midelware=require('../midleware/loginPassport')
 router.post('/register',login.register);
router.post('/login',login.index);
router.get('/refresh',login.requetRefreshToken);
 router.post('/auth/google',passport.authenticate('google-plus-token',{session:false}),login.authGoogle)
 router.post('/auth/facebook',passport.authenticate('facebook-token',{session:false}),login.authFacebook)
module.exports=router;
 