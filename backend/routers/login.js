const express = require('express');
const router = express.Router();
const login= require('../controller/loginController');

 router.post('/register',login.register);
router.post('/login',login.index);
router.get('/refresh',login.requetRefreshToken);
 

module.exports=router;
 