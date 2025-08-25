import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // instance sequelize đã khởi tạo sẵn

class Favorite extends Model {
  static associate(models) {
    // Quan hệ với bảng User (người yeu thich)
    Favorite.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });

    Favorite.belongsTo(models.Job, {
      foreignKey: "job_id",
      as: "job",
      onDelete: "CASCADE",
    });
  }
}

function initFavorite(sequelize) {
  Favorite.init(
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
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize, // Instance Sequelize
      modelName: "Favorite", // Tên model
      tableName: "favorites", // Tên bảng trong DB
      timestamps: true, // Tự tạo createdAt, updatedAt
    }
  );

  return Favorite;
}

export default initFavorite;