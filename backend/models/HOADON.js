const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOADON', {
    SOHD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NGHD: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    MAKH: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      references: {
        model: 'KHACHHANG',
        key: 'MAKH'
      }
    },
    MANV: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      references: {
        model: 'NHANVIEN',
        key: 'MANV'
      }
    },
    TRIGIA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HOADON',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_hd",
        unique: true,
        fields: [
          { name: "SOHD" },
        ]
      },
    ]
  });
};
