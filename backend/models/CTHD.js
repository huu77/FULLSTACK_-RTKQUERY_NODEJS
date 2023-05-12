const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTHD', {
    SOHD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'HOADON',
        key: 'SOHD'
      }
    },
    MASP: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SANPHAM',
        key: 'MASP'
      }
    },
    SL: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTHD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_cthd",
        unique: true,
        fields: [
          { name: "SOHD" },
          { name: "MASP" },
        ]
      },
    ]
  });
};
