import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { Sequelize } from "sequelize";

dotenv.config();

import UserRoutes from "./Routes/UserRoutes.js";

const app = express();
app.use(express.json());


app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Dùng thư mục /uploads như static file
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ MySQL Connected"))
  .catch((err) => console.error("❌ Connection error:", err));

app.get("/", (req, res) => {
  res.send("Server running with MySQL!");
});

app.use("/api/users", UserRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT}`);
});
