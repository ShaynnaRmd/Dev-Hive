// Import modules nécéssaires
var express = require("express"); // Pour créer les routes
var router = express.Router();
const mongoose = require("mongoose"); // Pour intéragir avec la BDD MongoDB
const bcrypt = require("bcryptjs"); // Pour le hashage des mots de passe
const userStudents = require("../models/user_students");
const userCompanies = require("../models/user_companies");

// Route par défaut renvoyant un msg quand on accède à la racine de la route
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Route pour la connexion
router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;

  // Vérifications du remplissage des champs "email" et "mot de passe" ; renvoi d'un message d'erreur si l'un des champs manque
  if (email == undefined || password == undefined) {
    return res.json({ err: true, msg: `Veuillez renseigner tous les champs.` });
  }

  // Recherche de l'email fourni dans la bdd avec la méthode findOne ; renvoi d'un message d'erreur si aucun compte n'est associé à l'email fourni
  const check_user = await userStudents.findOne({ email });
  if (!check_user) {
    return res.json({
      success: false, // remplacer success: false par err: true ?
      msg: `L'adresse email ${email} n'est asociée à aucun compte.`,
    });
  }

  // Vérification du mdp fourni en le comparant avec celui hashé dans la bdd avec la fonction "comparePassword" (fonction ligne #) ; renvoie les données de l'utilisateur si le smdp correspondent
  const check_password = await comparePassword(password, check_user.password);
  if (check_password == true) {
    return res.json({ success: true, data: check_user }); 
  }

  // Renvoie un message d'erreur si les mots de passe ne correspondent pas
  return res.json({ success: false, msg: `L'adresse email ou le mot de passe est invalide, veuillez réessayer.` });
});

// Route pour la création de compte
router.get("/createaccount", async function (req, res, next) {
  const { email, password } = req.body;

  try {
    if (email == undefined || password == undefined) {
      return res.json({ err: true, msg: `Veuillez renseigner tous les champs.` });
    }

    const check_email = await userStudents.findOne({ email });
    if (check_email) {
      return res.json({
        success: false,
        msg: `L'adresse email ${email} est déjà associée à un compte.`,
      });
    }

    const hash_password = await hashPassword(password, 10);

    const user = await userStudents.create({
      ...req.body,
      password: hash_password,
    });
    return res.json({ success: true, data: user });
  } catch (error) {
    return res.json({ error: true, msg: `Une erreur s'est produite lors de la création du compte` });
  }
});

module.exports = router;

// Fonction pour hasher le password
const hashPassword = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
  return null;
};

// Notes sur "salt":
// Le sel/salt est une chaîne aléatoire utilisée pour renforcer le processus de hachage.
// Le nombre de "tours" de génération de sel est spécifié par saltRounds.
   
// Fonction pour comparer les mots de passe 
async function comparePassword(password, hash_password) {
  try {
    const match = await bcrypt.compare(password, hash_password);
    return match;
  } catch (error) {
    throw error; 
  }
}