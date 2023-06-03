const express = require('express');
const router = express.Router();
const login = require('../controller/loginController');
const passport = require('passport')
const Midelware = require('../midleware/loginPassport')
router.post('/register', login.register);
router.post('/login', login.index);
router.get('/refresh', login.requetRefreshToken);
// login google with passport
router.get('/auth/google', passport.authenticate('google', { scope: [ 'profile','email'] }));
router.get('/auth/google/callback',
    passport.authenticate('google',
        {
            failureMessage: 'login faile',
            failWithError:'http://localhost:5173/login'
            
        }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log(req.user);
        res.send("logiin gg success")
        res.redirect('http://localhost:5173/home');
    });
//
router.get('/logout',  function(req, res){
    req.logout(function(err) {
        if (err) {
          // Xử lý lỗi nếu có
          return next(err);
        }
        // Xử lý thành công sau khi logout
        // Ví dụ: chuyển hướng đến trang đăng nhập
        res.redirect('/login');
      });
      
    
  });
//login facebook
router.post('/auth/facebook', passport.authenticate('facebook-token', { session: false }), login.authFacebook)
module.exports = router;
