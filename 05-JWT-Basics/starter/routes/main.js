const express = require(`express`);
const {Login, GetDashboard} = require(`../controllers/main`);

const router = express.Router();

router.route(`/login`).post(Login);
router.route(`/`).get(GetDashboard);

module.exports = router;