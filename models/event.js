'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Event.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
        Event.hasMany(models.Schedule, {
          foreignKey: 'event_id'
        });
      }
    }
  });
  return Event;
};
