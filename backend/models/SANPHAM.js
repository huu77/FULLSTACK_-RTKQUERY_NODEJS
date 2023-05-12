const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SANPHAM', {
    MASP: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    TENSP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DVT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUOCSX: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    GIA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    IMG: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SANPHAM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sp",
        unique: true,
        fields: [
          { name: "MASP" },
        ]
      },
    ]
  });
};
