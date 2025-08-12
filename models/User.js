import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // instance sequelize đã khởi tạo sẵn
import bcrypt from "bcrypt";

class User extends Model {
  static associate(models) {
    // User.hasMany(models.Review, {
    //   foreignKey: "user_id",
    //   as: "reviews",
    // });
  }

  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await User.hashPassword(user.password);
  }
});

User.beforeUpdate(async (user) => {
  if (user.password && user.password !== user._previousDataValues.password) {
    user.password = await User.hashPassword(user.password);
  }
});

export default User;
