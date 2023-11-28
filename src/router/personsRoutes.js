const express = require("express");

const router = express.Router();

const personController = require("../controllers/personsController");

const { browse, read, edit, add, remove } = personController;

router.get("/", browse);
router.post("/", add);

router.get("/:id", read);
router.delete("/:id", remove);
router.put("/:id", edit);

module.exports = router;
