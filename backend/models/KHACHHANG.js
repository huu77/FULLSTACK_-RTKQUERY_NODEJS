const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KHACHHANG', {
    MAKH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FB: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    HOTEN: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DCHI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SODT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOANHSO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    IMG: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KHACHHANG',
    schema: 'dbo',
    timestamps: false
  });
};
