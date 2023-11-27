// Import modules nécéssaires
const express = require("express"); // Pour créer les routes
const router = express.Router();
const authToken = require('../middlewares/authToken')
const authController = require("../controllers/authController")
const profileController = require("../controllers/profileController")

// Route par défaut renvoyant un msg quand on accède à la racine de la route
router.get("/", function (req, res, next) {
  res.send("Root");
});

router.post("/login", authController.login)
router.post("/registerStudent", authController.registerStudent)
router.post("/registerCompany", authController.registerCompany)
router.post("/forgotPassword", authController.forgotPassword)
router.post("/resetPassword/:token", authController.resetPassword)
// router.post("/logout/:id", authController.logout)

// router.post("/displayProfileStudent/:id", profileController.displayProfileStudent)
// router.post("/displayProfileCompany/:id", profileController.displayProfileCompany)
router.post("/updateProfileStudent/:id", profileController.updateProfileStudent)
router.post("/updateProfileCompany/:id", profileController.updateProfileCompany)

// router.get("/resetPassword/:token", authController.resetPassword)

module.exports = router