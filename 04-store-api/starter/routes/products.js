const {getAllProduct, getAllProductStatic} = require(`../controllers/products`);
const express = require(`express`);

const router = express.Router();
router.route(`/`).get(getAllProduct);
router.route(`/static`).get(getAllProductStatic);

module.exports = router