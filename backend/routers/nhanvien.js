const express = require('express');
const router = express.Router();
const nhaviencontroller= require('../controller/nhanvienController');
const midlewareControll=require('../midlewareController')
router.post('/api/v1/ds-nhan-vien/addNV',midlewareControll.verifyAdmin,nhaviencontroller.addNV)
router.put('/api/v1/ds-nhan-vien/editNV',midlewareControll.verifyAdmin,nhaviencontroller.editNV)
router.delete('/api/v1/ds-nhan-vien/deleteNV',midlewareControll.verifyAdmin,nhaviencontroller.deleteNV)
router.get('/api/v1/ds-nhan-vien',midlewareControll.verifyAdmin,nhaviencontroller.listNV);
router.get('/api/v1/nhanvien/:id',midlewareControll.verifyToken,nhaviencontroller.nhanvien)


module.exports=router;
