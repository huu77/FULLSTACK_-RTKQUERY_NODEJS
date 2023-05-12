const express = require('express');
const router = express.Router();
const productController= require('../controller/productController')
const midlewareControll=require('../midlewareController')
router.get('/danhsach_sp',productController.getDS)
router.post('/addSP',midlewareControll.verifyAdmin,productController.addSP)
module.exports=router;