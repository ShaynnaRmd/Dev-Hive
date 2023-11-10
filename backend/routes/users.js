var express = require("express");
var router = express.Router();
const userStudent = require("../models/user_student");
const mongoose = require("mongoose");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;

  if (email == undefined || password == undefined) {
    return res.json({ err: true, msg: `rentrez tous les champs` });
  }

  const check_user = await userStudent.findOne({ email });
  if (!check_user) {
    return res.json({
      success: false,
      msg: `${email} n'est asocié à aucun compte.`,
    });
  }

  const check_password = await compareAsync(password, userStudent.password);
  if (check_password) {
    return res.json({ success: true, data: check_user });
  }

  return res.json({ success: false, msg: `email ou mot de passe invalide` });
});

router.post("/createaccount", async function (req, res, next) {
  const { email, password } = req.body;

  const user = await userStudent.create({ email, password });
  return res.json({ success: true, data: user });
});

module.exports = router;

// Foonction de comparaison mmdp rentré dans le form et mdp dans la bdd
function compareAsync(password, hash_password) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(password, hash_password, function (err, res) {
      if (err) {
        reject(err);
      }
      if (res) {
        resolve(res);
      }
    });
  });
}
