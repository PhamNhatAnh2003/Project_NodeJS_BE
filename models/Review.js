import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // instance sequelize đã khởi tạo sẵn

class Review extends Model {
  static associate(models) {
    // Review thuộc về một User
    Review.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });

    // Review thuộc về một Job
    Review.belongsTo(models.Job, {
      foreignKey: "job_id",
      as: "job",
      onDelete: "CASCADE",
    });
  }
}

function initReview(sequelize) {
  Review.init(
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
      description: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize, // Instance Sequelize
      modelName: "Review", // Tên model
      tableName: "reviews", // Tên bảng trong DB
      timestamps: true, // Tự tạo createdAt, updatedAt
    }
  );

  return Review;
}

export default initReview;