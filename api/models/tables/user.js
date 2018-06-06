'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Invoice, { foreignKey: 'user_id' })
        User.hasMany(models.Order, { foreignKey: 'user_id' })
        User.hasMany(models.Review, { foreignKey: 'user_id' })
        User.hasMany(models.Tracking, { foreignKey: 'user_id' })
      }
    }
  });
  return User;
};