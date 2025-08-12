import { Model, DataTypes } from "sequelize";

class Budget extends Model {
  static associate(models) {
    Budget.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });

    Budget.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE",
    });
  }
}

function initBudget(sequelize) {
  Budget.init(
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
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount_limit: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Budget",
      tableName: "budgets",
      timestamps: true,
    }
  );

  return Budget;
}

export default initBudget;
