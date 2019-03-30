module.exports = function (sequelize, DataTypes) {
  return sequelize.define("coordinates", {
    coordinates: {
      type: DataTypes.JSONB,
      get() {
        return JSON.parse(this.getDataValue('coordinates'));
      },
      set(coordinates) {
        console.log(coordinates)
        return this.setDataValue('coordinates', coordinates);
      }
    },
    x_coordinates: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    y_coordinates: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    goals: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  });
};