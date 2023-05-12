const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NHANVIEN', {
    MANV: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    HOTEN: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SODT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NGVL: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NHANVIEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_nv",
        unique: true,
        fields: [
          { name: "MANV" },
        ]
      },
    ]
  });
};
