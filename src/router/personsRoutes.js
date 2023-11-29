const express = require("express");

const router = express.Router();

const personController = require("../controllers/personsController");

const { auth } = require("../middlewares/auth");
const { hashPwd } = require("../middlewares/hashpassword");

const { browse, read, edit, add, remove } = personController;

router.get("/", auth, browse);
router.post("/", add);

router.get("/:id", read);
router.delete("/:id", remove);
router.put("/:id", edit);

module.exports = router;
