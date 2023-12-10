// Import modules nécéssaires
const express = require("express")
const router = express.Router()
const authToken = require('../middlewares/authToken')
const authController = require("../controllers/authController")
const profileController = require("../controllers/profileController")

// Route par défaut renvoyant un msg quand on accède à la racine de la route
router.get("/", function (req, res, next) {
  res.send("Root")
})

router.post("/login", authController.login)
router.post("/register", authController.register)
router.post("/forgotPassword", authController.forgotPassword)
router.post("/resetPassword/:token", authController.resetPassword)
// router.post("/logout/:id", authController.logout)

router.post("/uploadProfilePicture/:id", profileController.uploadProfilePicture)
router.post("/displayProfile/:id", profileController.displayProfile)
router.post("/createProfile/:id", profileController.updateProfile)
router.post("/updateProfile/:id", profileController.updateProfile)

module.exports = router