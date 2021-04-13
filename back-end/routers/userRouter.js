const router = require("express").Router();
const query = require("../database");

// Get All Users
router.get("/", (req, res) => {
  let sql = `select * from products`;
  query(sql, (err, getProduct) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(getProduct);
  });
});

module.exports = router
