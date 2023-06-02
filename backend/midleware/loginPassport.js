const passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    GooglePlusTokenStrategy = require('passport-google-plus-token');
    
const model = require('../models/init-models')
const { Op } = require('sequelize');
passport.use(new GooglePlusTokenStrategy({
    clientID: "935451396424-k9drk811ou7jsghmcdmp2hlhnminvcfo.apps.googleusercontent.com",
    clientSecret: "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",
    passReqToCallback: true
}, async function (req, accessToken, refreshToken, profile, done) {

    try {



        const emails = profile['emails'][0].value;
        const imgUser = profile['_json'].image.url


        const user = await model.KHACHHANG.findOne({
            where: {
                MAKH: profile['id']
            }
        });

        if (user) return done(null, user)



        const newUser = await model.KHACHHANG.create({

            MAKH: profile['id'].toString(),
            EMAIL: emails,
            FB: "",
            HOTEN: profile['displayName'],
            DCHI: "",
            SODT: "",
            DOANHSO: 0.0,
            IMG: imgUser

        })
        console.log(newUser);
        return done(null, newUser)

    } catch (error) {
        done(error, false)
    }

}));