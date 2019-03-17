
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("zones", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    cold_zone: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    hot_zone: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE
    },
  });
};