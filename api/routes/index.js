const express = require("express");
const { proposeItems } = require("../controllers/userController");

const router = express.Router();

router.post("/getProposedItems", proposeItems);

module.exports = router;
