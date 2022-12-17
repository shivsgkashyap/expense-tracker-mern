const express = require("express");
const router = express.Router();
const { getTransactions } = require("../controllers/transactionsController.js");

router.route("/").get(getTransactions);

module.exports = router;
