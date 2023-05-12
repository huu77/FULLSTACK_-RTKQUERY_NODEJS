const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAIKHOAN', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME_TK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASS: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ROLE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAIKHOAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAIKHOAN",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
