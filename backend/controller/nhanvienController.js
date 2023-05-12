const models = require("../models/init-models")
//get list nv
const listNV = async(req,res)=>{
    const nv= await models.NHANVIEN.findAll();
    res.json(nv)
   }
 
   //get 1 nv
const nhanvien=async(req,res)=>{
    const param=req.params.id
    const nv= await models.NHANVIEN.findOne({where:{ID:param}});
    res.status(200).json(nv)
   }


   //add nv
   const addNV=async(req,res)=>{
    const MANV=req.body.MANV;
    const HOTEN=req.body.HOTEN;
    const SODT=req.body.SODT;
    const NGVL=req.body.NGVL;
     
    const exits=await  models.NHANVIEN.findOne({where:{MANV:MANV}});
    if(exits) {
        res.status(401).json({mesage:"da ton tai manv tren he thong"})
    }
    const user = await  models.NHANVIEN.create({
        MANV: MANV,
        HOTEN: HOTEN,
        SODT:SODT,
        NGVL:NGVL
        
      })
      await user.save();
       res.status(200).json({mesage:"tao nhan vien moi thanh cong"})
   }

   //edit 
   const editNV=async(req,res)=>{
    const MANV=req.body.MANV;
    const HOTEN=req.body.HOTEN;
    
    const SODT=req.body.SODT;
    const NGVL=req.body.NGVL;
    const ID=req.body.ID;

    const exits=await  models.NHANVIEN.findOne({where:{MANV:MANV}});
if(!exits){
    res.status(401).json("ko có ban ghi nao phu hop")
}
await  models.NHANVIEN.update({ MANV: MANV,HOTEN:HOTEN,SODT:SODT,NGVL:NGVL,ID:ID }, { where: { MANV: MANV } });
res.status(200).json({mesage:"update nhan vien  thanh cong"})
   }
//deletenv
const deleteNV=async(req,res)=>{
    const MANV=req.body.MANV;
     

    const exits=await  models.NHANVIEN.findOne({where:{MANV:MANV}});
if(!exits){
    res.status(401).json("ko có ban ghi nao phu hop")
}
await  models.NHANVIEN.destroy(  { where: { MANV: MANV } });
res.status(200).json({mesage:"delete nhan vien  thanh cong"})
   }
   //
   module.exports={listNV,nhanvien,addNV,editNV,deleteNV}