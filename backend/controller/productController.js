const models = require("../models/init-models")
const getDS = async (req, res) => {
    const sp = await models.SANPHAM.findAll()
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
module.exports = { getDS, addSP }