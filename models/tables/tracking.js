'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tracking = sequelize.define('Tracking', {
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tracking.belongsTo(models.User, { foreignKey: 'user_id' })
        Tracking.belongsTo(models.Order, { foreignKey: 'order_id' })
      }
    }
  });
  return Tracking;
};