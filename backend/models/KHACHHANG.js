const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KHACHHANG', {
    MAKH: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
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
    NGSINH: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    NGDK: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    DOANHSO: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PASS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KHACHHANG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_kh",
        unique: true,
        fields: [
          { name: "MAKH" },
        ]
      },
    ]
  });
};
