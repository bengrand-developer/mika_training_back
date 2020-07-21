const express = require("express");
const router = express.Router();
const connection = require("../config");

//GET ALL PROJECTS

router.get("/", (req, res) => {
  const sql = "SELECT * FROM projet";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
