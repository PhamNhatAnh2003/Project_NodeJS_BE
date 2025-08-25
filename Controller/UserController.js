import models from "../models/index.js";
import { createUserService } from "../Services/UserServices/createUserService.js";
import { updateUserService } from "../Services/UserServices/updateUserService.js";
import { loginUserService } from "../Services/authServices/loginUserService.js";
import { getUserService } from "../Services/UserServices/getUserService.js";


export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await getUserService(id);
    return res.status(200).json({
      success: true,
      message: `Lấy thành công thông tin người dùng`,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Lấy thông tin người dùng thất bại",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await loginUserService(username, password);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const userData = req.body;
    const user = await createUserService(userData);

    return res.status(201).json({
      success: true,
      message: "Tạo thành công người dùng",
      user,
    });
  } catch (error) {
    console.error("Lỗi tạo user:", error.message);

    // Nếu là lỗi username tồn tại
    if (error.message.includes("đã tồn tại")) {
      return res.status(409).json({
        // 409 Conflict
        success: false,
        message: error.message,
      });
    }

    // Lỗi khác
    return res.status(500).json({
      success: false,
      message: "Tạo người dùng thất bại",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    if (req.file) {
      updateData.avatar = req.file;
    }

    const user = await models.User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy người dùng" });
    }

    const result = await updateUserService(user, updateData);

    res.status(200).json({
      success: true,
      message: "Cập nhật người dùng thành công",
      user: result,
    });
  } catch (error) {
    console.error("Update staff error:", error);
    return res.status(500).json({
      message: "Cập nhật người dùng thất bại",
      error: error.message,
    });
  }
};
