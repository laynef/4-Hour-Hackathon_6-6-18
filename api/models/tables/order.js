'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Order.belongsToMany(models.Product, { foreignKey: 'product_id', as: 'order_product', through: models.OrderProduct })
        Order.belongsTo(models.User, { foreignKey: 'user_id' })
        Order.hasOne(models.Review, { foreignKey: 'order_id' })
        Order.hasOne(models.Tracking, { foreignKey: 'order_id' })
        Order.hasOne(models.Invoice, { foreignKey: 'order_id' })
      }
    }
  });
  return Order;
};