import { Model, DataTypes } from "sequelize";

class Category extends Model {
  static associate(models) {
    // 1 category thuộc về 1 user
    Category.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });

    // 1 category có nhiều transactions
    Category.hasMany(models.Transaction, {
      foreignKey: "category_id",
      as: "transactions",
    });

    // 1 category có thể có nhiều budgets (nếu dùng)
    Category.hasMany(models.Budget, {
      foreignKey: "category_id",
      as: "budgets",
    });
  }
}

function initCategory(sequelize) {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("income", "expense"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      timestamps: true, // createdAt, updatedAt
    }
  );

  return Category;
}

export default initCategory;
