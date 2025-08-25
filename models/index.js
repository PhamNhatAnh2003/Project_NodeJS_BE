import sequelize from "../config/db.js"; // import instance sequelize
import User from "./User.js"; // class User đã init rồi
import initJob from "./Job.js"
import initFavorite from "./Favorite.js"
import initReview from "./Review.js";
import initApply from "./Apply.js"

// Các model phải được khởi tạo với instance sequelize

const Job = initJob(sequelize);
const Favorite = initFavorite(sequelize);
const Review  = initReview(sequelize);
const Apply  = initApply(sequelize);

const models = {
  User,
  Job,
  Favorite,
  Review,
  Apply,
};

// Gọi associate sau khi các model đã có mặt
Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

export { sequelize };
export default models;
