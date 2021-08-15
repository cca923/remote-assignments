const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const enter = req.query.number;
  const result = ((Number(enter) + 1) * Number(enter)) / 2;

  if (!enter) {
    res.render("getData", { message: "Lack of Parameter" });
  } else if (!/(^[1-9]\d*$)/.test(Number(enter))) {
    res.render("getData", { message: "Wrong Parameter" });
  } else {
    res.render("getData", { result });
  }
});

module.exports = router;

// ---- 測試「不是正整數？」 ---- //
// !/(^[1-9]\d*$)/.test(2.2); // true
// !/(^[1-9]\d*$)/.test(5); // false
// !/(^[1-9]\d*$)/.test("test"); // true (NaN)
