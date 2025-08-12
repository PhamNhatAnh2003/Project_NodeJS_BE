import sequelize from "../config/db.js"; // import instance sequelize
import User from "./User.js"; // class User đã init rồi
import initCategory from "./Category.js";
import initTransaction from "./Transaction.js";
import initBudget from "./Budgets.js";

// Các model phải được khởi tạo với instance sequelize
const Category = initCategory(sequelize);
const Transaction = initTransaction(sequelize);
const Budget = initBudget(sequelize);

const models = {
  User,
  Category,
  Transaction,
  Budget,
};

// Gọi associate sau khi các model đã có mặt
Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

export { sequelize };
export default models;
