const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTSP', {
    MASP: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      references: {
        model: 'SANPHAM',
        key: 'MASP'
      }
    },
    SOLUONG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idKHACHHANG: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "IX_CTSP"
    }
  }, {
    sequelize,
    tableName: 'CTSP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_CTSP",
        unique: true,
        fields: [
          { name: "idKHACHHANG" },
        ]
      },
    ]
  });
};
