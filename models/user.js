const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  User.associate = models => {
    User.hasMany(models.orders, {
      onDelete: 'cascade'
    })
    User.hasMany(models.cart_items, {
      foreignKey: { name: 'UserId', allowNull: false },
      onDelete: 'cascade'
    })
  }


  return User
}
