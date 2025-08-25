"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "jobs",
    [
      {
        id: 1,
        name: "Frontend Developer",
        description: "Phát triển giao diện web bằng ReactJS",
        jobType: "Full-time",
        jobCategory: "IT",
        salary: 15000000.0,
        location: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Backend Developer",
        description: "Xây dựng API bằng Node.js và Express",
        jobType: "Full-time",
        jobCategory: "IT",
        salary: 18000000.0,
        location: "TP. Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "UI/UX Designer",
        description: "Thiết kế giao diện và trải nghiệm người dùng",
        jobType: "Part-time",
        jobCategory: "Design",
        salary: 12000000.0,
        location: "Đà Nẵng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Digital Marketing",
        description: "Chạy quảng cáo Facebook, Google Ads",
        jobType: "Full-time",
        jobCategory: "Marketing",
        salary: 10000000.0,
        location: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Data Analyst",
        description: "Phân tích dữ liệu và tạo báo cáo",
        jobType: "Remote",
        jobCategory: "Data",
        salary: 20000000.0,
        location: "Remote",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("jobs", null, {});
}
