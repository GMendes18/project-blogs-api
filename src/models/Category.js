module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', 
    {
      id: { type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false,
      },
    },
    {
      tableName: 'categories', 
      timestamps: false,
    },
  );
  Category.associate = (models) => {
    Category.hasMany = (models.PostCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };
  return Category;
};