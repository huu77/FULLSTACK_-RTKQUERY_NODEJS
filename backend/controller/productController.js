const models = require("../models/init-models")
const getDS = async (req, res) => {
    const sp = await models.SANPHAM.findAll({ limit: 16 })
    res.status(200).json(sp)
}
const addSP = async (req, res) => {
    const MASP = req.body.MASP
    const TENSP = req.body.TENSP
    const DVT = req.body.DVT
    const NUOCSX = req.body.NUOCSX
    const GIA = req.body.GIA
    const IMG = req.body.IMG
    const exists = await models.SANPHAM.findOne({ where: { MASP: MASP } })
    if (exists) {
        res.status(401).json({ mesage: "ma san pham da ton tai" })
    }
    const newsp = await models.SANPHAM.create({
        MASP: MASP,
        TENSP: TENSP,
        DVT:DVT,
        NUOCSX: NUOCSX,
        GIA: GIA,
        IMG: IMG

    })
    await newsp.save();
    res.status(200).json({ mesage: "tao san pham moi thanh cong" })
}
const getProduct=async(req, res)=>{
try {
    const paramSP = req.params.id;
    const product = await models.SANPHAM.findOne({where:{MASP:paramSP}});

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
}catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
const addProduct=async(req, res)=>{
const idSP= req.boby.id
const soluong=req.boby.count
const makhachhang=req.boby.makhachhang 
const product = await models.SANPHAM.findOne({where:{MASP:idSP}});
const khachhang =await models.KHACHHANG.findOne({where:{ID:makhachhang}})
if(product && khachhang){
    const addNew= await models.CTSP.create({
        MASP:"",
        SOLUONG:1,
        idKHACHHANG:""
    })
    await addNew.save();
       res.status(200).json({mesage:"them san pham thanh cong"})
}
res.status(400).json({mesage:"ban chua dang nhap"})
}
module.exports = { getDS, addSP ,getProduct,addProduct}