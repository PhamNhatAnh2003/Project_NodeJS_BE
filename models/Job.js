import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // instance sequelize đã khởi tạo sẵn

class Job extends Model {
  static associate(models) {
    // Một Job có nhiều Favorites
    Job.hasMany(models.Favorite, {
      foreignKey: "job_id",
      as: "favorites",
      onDelete: "CASCADE",
    });

    // Một Job có nhiều Reviews
    Job.hasMany(models.Review, {
      foreignKey: "job_id",
      as: "reviews",
      onDelete: "CASCADE",
    });

     Job.belongsToMany(models.User, {
       through: models.Apply, // bảng trung gian
       foreignKey: "job_id",
       otherKey: "user_id",
       as: "applicants",
     });
  }
}

function initJob(sequelize) {
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      jobType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      jobCategory: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      salary: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "jobs",
      timestamps: true, // tự động tạo createdAt, updatedAt
    }
  );

  return Job;
}

export default initJob;
