var DataTypes = require("sequelize").DataTypes;
var _CTHD = require("./CTHD");
var _CTSP = require("./CTSP");
var _HOADON = require("./HOADON");
var _KHACHHANG = require("./KHACHHANG");
var _NHANVIEN = require("./NHANVIEN");
var _SANPHAM = require("./SANPHAM");
var _TAIKHOAN = require("./TAIKHOAN");

function initModels(sequelize) {
  var CTHD = _CTHD(sequelize, DataTypes);
  var CTSP = _CTSP(sequelize, DataTypes);
  var HOADON = _HOADON(sequelize, DataTypes);
  var KHACHHANG = _KHACHHANG(sequelize, DataTypes);
  var NHANVIEN = _NHANVIEN(sequelize, DataTypes);
  var SANPHAM = _SANPHAM(sequelize, DataTypes);
  var TAIKHOAN = _TAIKHOAN(sequelize, DataTypes);

  HOADON.belongsToMany(SANPHAM, { as: 'MASP_SANPHAMs', through: CTHD, foreignKey: "SOHD", otherKey: "MASP" });
  SANPHAM.belongsToMany(HOADON, { as: 'SOHD_HOADONs', through: CTHD, foreignKey: "MASP", otherKey: "SOHD" });
  CTHD.belongsTo(HOADON, { as: "SOHD_HOADON", foreignKey: "SOHD"});
  HOADON.hasMany(CTHD, { as: "CTHDs", foreignKey: "SOHD"});
  CTHD.belongsTo(SANPHAM, { as: "MASP_SANPHAM", foreignKey: "MASP"});
  SANPHAM.hasMany(CTHD, { as: "CTHDs", foreignKey: "MASP"});
  CTSP.belongsTo(SANPHAM, { as: "MASP_SANPHAM", foreignKey: "MASP"});
  SANPHAM.hasMany(CTSP, { as: "CTSPs", foreignKey: "MASP"});

  return {
    CTHD,
    CTSP,
    HOADON,
    KHACHHANG,
    NHANVIEN,
    SANPHAM,
    TAIKHOAN,
  };
}
module.exports = initModels(require('../data'));
module.exports.initModels = initModels;
module.exports.default = initModels;
