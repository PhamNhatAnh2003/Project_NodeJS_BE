import express from "express";
import {
  getAllJobs,
  getJobById,
  // createJob,
  // updateJob,
  // deleteJob,
} from "../Controller/JobController.js";

const router = express.Router();

router.get("/all-jobs", getAllJobs);
router.get("/jobs/:id", getJobById);
// router.post("/", createJob);
// router.put("/:id", updateJob);
// router.delete("/:id", deleteJob);

export default router;
