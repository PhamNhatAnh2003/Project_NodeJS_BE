import { createUserService } from "../Services/UserServices/createUserService.js";

export const createUser = async (req, res) => {
  try {
    console.log("Request body:", req.body); // log dữ liệu nhận được

    const userData = req.body;

    const user = await createUserService(userData);

    res.status(201).json({
      success: true,
      message: "Tạo thành công người dùng",
      user,
    });
  } catch (error) {
    console.error("Lỗi tạo user:", error); // log lỗi chi tiết
    return res.status(500).json({
      message: "Tạo người dùng thất bại",
      error: error.message,
    });
  }
};

