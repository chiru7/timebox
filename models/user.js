'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Event, {
          foreignKey: 'user_id'
        });
        User.hasMany(models.Schedule, {
          foreignKey: 'user_id'
        });
        User.hasMany(models.Schedule, {
          as: 'Owner',
          foreignKey: 'owner_id'
        });
      }
    }
  });
  return User;
};
