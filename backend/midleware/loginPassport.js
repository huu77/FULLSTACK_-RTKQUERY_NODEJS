const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const model = require('../models/init-models');
const { Op } = require('sequelize');

passport.use(new GoogleTokenStrategy({
    clientID: "935451396424-k9drk811ou7jsghmcdmp2hlhnminvcfo.apps.googleusercontent.com",
    clientSecret: "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",
    passReqToCallback: true
}, async function (req, accessToken, refreshToken, profile, done) {

    try {

        const emails = profile.emails[0].value;
        const imgUser = profile.photos[0].value;

        const user = await model.KHACHHANG.findOne({
            where: {
                ID: profile.id
            }
        });

        if (user) {
            req.user=user
            return done(null, user)
            
        };

        const newUser = await model.KHACHHANG.create({
            ID: profile.id,
            EMAIL: emails,
            FB: "",
            HOTEN: profile.displayName,
            DCHI: "",
            SODT: "",
            DOANHSO: 0.0,
            IMG: imgUser
        });

        console.log(newUser);
        req.user=newUser
        return done(null, newUser);

    } catch (error) {
        done(error, false);
    }

}));
 

passport.use(new FacebookTokenStrategy({
    clientID:"1606091716463135",
    clientSecret: "8ceea6b2b61fddcdb0f42c69d22c3710",
    passReqToCallback: true
  }, async function(req, accessToken, refreshToken, profile, done) {
  
    try {

        const emails = "";
        const imgUser = profile.photos[0].value;

        const user = await model.KHACHHANG.findOne({
            where: {
                ID: profile.id
            }
        });

        if (user) {
            req.user=user
            return done(null, user)
            
        };

        const newUser = await model.KHACHHANG.create({
            ID: profile.id,
            EMAIL: emails,
            FB: "",
            HOTEN: profile.displayName,
            DCHI: "",
            SODT: "",
            DOANHSO: 0.0,
            IMG: imgUser
        });

        console.log(newUser);
        req.user=newUser
        return done(null, newUser);

    } catch (error) {
        done(error, false);
    }
  }
));