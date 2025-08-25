import { getJobService } from "../Services/jobServices/getJobService.js";
import { getJobByIdService } from "../Services/jobServices/getJobService.js";

export const getAllJobs = async (req, res) => {
  try {
    const filters = {
      type: req.query.type,
      category_id: req.query.category_id,
    };

    const jobs = await getJobService(filters);
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await getJobByIdService(id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

