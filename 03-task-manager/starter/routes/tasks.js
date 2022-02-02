const express = require(`express`);
const router = express.Router();
const {getAllTasks, createATask, getATask, modifyATask, deleteATask} = require(`../controller/tasks`);

router.route(`/`).get(getAllTasks).post(createATask);
router.route(`/:id`).get(getATask).patch(modifyATask).delete(deleteATask);

module.exports = router;