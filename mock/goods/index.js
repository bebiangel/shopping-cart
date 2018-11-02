const router = require("express").Router();

// Goods List
let list = require("./goods.json");
router.get("/goods", (req, res) => {
  res.json(list);
});

module.exports = router;
