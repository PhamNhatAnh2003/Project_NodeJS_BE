
import User from "./User.js";

const models = {
  User,
};

// Gọi associate sau khi các model đã có mặt
Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

export default models;
