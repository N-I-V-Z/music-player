const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MusicPlayer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    src: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MusicPlayer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__MusicPla__3213E83FA74232E4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
