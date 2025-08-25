import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Apply extends Model {}
function initApply(sequelize) {
Apply.init(
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
    status: {
      type: DataTypes.STRING(50), // pending, accepted, rejected
      allowNull: false,
      defaultValue: "PENDING",
    },
    applied_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "applies",
    modelName: "Apply",
    timestamps: false,
  }
);
return Apply;
}
export default initApply;
