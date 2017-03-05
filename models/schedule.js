'use strict';
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    start_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_date: DataTypes.DATE,
    end_time: DataTypes.TIME,
    publicity: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Schedule.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
        Schedule.belongsTo(models.User, {
          as: 'Owner',
          foreignKey: 'owner_id'
        });
        Schedule.belongsTo(models.Event, {
          foreignKey: 'event_id'
        });
      }
    }
  });
  return Schedule;
};
