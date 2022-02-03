const express = require(`express`);
const router = express.Router();
const {getAllTasks, createATask, getATask, updateATask, deleteATask} = require(`../controller/tasks`);

router.route(`/`).get(getAllTasks).post(createATask);
router.route(`/:id`).get(getATask).patch(updateATask).delete(deleteATask);

module.exports = router;