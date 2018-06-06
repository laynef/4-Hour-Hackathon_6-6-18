'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    order_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Invoice.belongsTo(models.Order, { foreignKey: 'order_id' })
      }
    }
  });
  return Invoice;
};