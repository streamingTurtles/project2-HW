// our 3 restaurant models
// expand here to add more restaurants in this model
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'categories',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }, 
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    )
    Category.associate = models => {
      Category.hasMany(models.products, {
        foreignKey: { name: 'categoryId', allowNull: false },
        onDelete: 'cascade'
      })
    }
    return Category
  }
  