var DataTypes = require("sequelize").DataTypes;
var _MusicPlayer = require("./MusicPlayer");

function initModels(sequelize) {
  var MusicPlayer = _MusicPlayer(sequelize, DataTypes);


  return {
    MusicPlayer,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
