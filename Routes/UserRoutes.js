import express from "express";
import multer from "multer";
// import {
//   loginUser
// } from "../Controller/UserController.js";

import {
  getUserById,
  loginUser,
  createUser,
  updateUser,
} from "../Controller/UserController.js";

const router = express.Router();
const upload = multer();

router.get("/:id", getUserById);
// router.get("/phone/:phone", getUserByPhone);
router.post("/login/user", loginUser);
router.post("/create", createUser);
router.post("/update/:id", upload.single("avatar"), updateUser);

export default router;
