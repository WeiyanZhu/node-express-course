const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require(`../controllers/jobs`);
const express = require(`express`);

const router = express.Router();
router.get(`/`, getAllJobs);
router.post(`/`, createJob);
router.route(`/:id`).get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
