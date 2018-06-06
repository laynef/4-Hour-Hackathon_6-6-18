'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.belongsToMany(models.Order, { foreignKey: 'order_id', as: 'product_order', through: models.OrderProduct })
      }
    }
  });
  return Product;
};