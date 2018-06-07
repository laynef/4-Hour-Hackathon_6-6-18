'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Review.belongsTo(models.Order, { foreignKey: 'order_id' })
        Review.belongsTo(models.User, { foreignKey: 'user_id' })
      }
    }
  });
  return Review;
};