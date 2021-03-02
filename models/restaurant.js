// our 3 restaurant models
// expand here to add more restaurants in this model
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define(
      'restaurants',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
          },
        image_name: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    )
    Restaurant.associate = models => {
      Restaurant.hasMany(models.products, {
        foreignKey: { name: 'restaurantId', allowNull: false },
        onDelete: 'cascade'
      })
    }
    return Restaurant
  }
  