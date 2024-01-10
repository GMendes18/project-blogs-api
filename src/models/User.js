module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users', 
    underscored: true, 
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'blogPosts' });
  };

  return User;
};