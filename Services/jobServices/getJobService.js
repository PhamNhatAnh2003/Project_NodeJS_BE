import models from "../../models/index.js";

const { Job, Review, Favorite } = models;

export const getJobService = async (filters = {}) => {
  const where = {};
if (filters.jobType) where.jobType = filters.jobType;
if (filters.jobCategory) where.jobCategory = filters.jobCategory;

  const jobs = await Job.findAll({
    where,
    include: [
      { model: Review, as: "reviews", attributes: ["id", "user_id", "description"] },
      { model: Favorite, as: "favorites", attributes: ["id", "user_id"] },
    ],
    order: [["createdAt", "DESC"]],
    limit: 3,
  });

  return jobs;
};

export const getJobByIdService = async (jobId) => {
  if (!jobId) {
    throw new Error("Job ID is required");
  }

  const job = await Job.findOne({
    where: { id: jobId },
    include: [
      {
        model: Review,
        as: "reviews",
        attributes: ["id", "user_id", "description"],
      },
      {
        model: Favorite,
        as: "favorites",
        attributes: ["id", "user_id"],
      },
    ],
  });

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};