const Router = require("express").Router;
const tableController = require("../controllers/table");

const router = new Router();

router.get("/", tableController.getData);

module.exports = router;
