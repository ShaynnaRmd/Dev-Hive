// Import modules nécéssaires
var express = require("express"); // Pour créer les routes
var router = express.Router();
// const mongoose = require("mongoose"); // Pour intéragir avec la BDD MongoDB
const bcrypt = require("bcryptjs"); // Pour le hashage des mots de passe
const { body, validationResult } = require("express-validator") // Pour validation et désinfection des inputs dans le body
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
  if (!email || !password) {
    return res.json({ success: false, msg: `Veuillez renseigner tous les champs.` });
  }

  try{
    // Recherche de l'email fourni dans la bdd avec la méthode findOne ; renvoi d'un message d'erreur si aucun compte n'est associé à l'email fourni
    // const check_user = await Promise.all([
    //   userStudents.findOne({ email }),
    //   userCompanies.findOne({ email }),
    // ])
    const check_user_student = await userStudents.findOne({email})
    const check_user_company = await userCompanies.findOne({email})

    let check_user

    if (!check_user_student && !check_user_company){
      return res.json({ success: false, msg: `L'adresse email ${email} n'est asociée à aucun compte.` })
    } else if (check_user_student){
      check_user = check_user_student
    } else if (check_user_company){
      check_user = check_user_company
    }

    // Vérification du mdp fourni en le comparant avec celui hashé dans la bdd avec la fonction "comparePassword"
    const check_password = await comparePassword(password, check_user.password);
    
    // Renvoie les données de l'utilisateur si les mdp correspondent ou msg d'erreur si ne correspondent pas
    if (check_password){
      return res.json({ success: true, data: check_user })
    } else {
      return res.json({ success: false, msg: `L'adresse email ou le mot de passe est invalide, veuillez réessayer.` })
    }
  } catch(error) {
    console.log(error)
    return res.status(500).json({ success: false, msg: 'Erreur interne du serveur.' })
  }
});

// Route pour la création de compte en tant qu'étudiant
router.post("/createaccount_student", [
  body('email').isEmail().normalizeEmail(), // Sanitiser et valider l'email inséré
  body('password').trim(), // Supprimer les espaces blancs dans le mot de passe inséré
], 
async function (req, res, next) {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, msg: `Veuillez renseigner tous les champs.` });
    }

    const check_email = await Promise.all([
      userStudents.findOne({ email }),
      userCompanies.findOne({ email }),
    ])

    if (check_email) {
      return res.json({ success: false, msg: `L'adresse email ${email} est déjà associée à un compte.` });
    }

    const hash_password = await hashPassword(password, 10);

    const user = await userStudents.create({
      ...req.body,
      password: hash_password,
    });

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(error)
    return res.json({ success: false, msg: `Une erreur s'est produite lors de la création du compte` });
  }
});

// Route pour la création de compte en tant qu'entreprise
router.post("/createaccount_company", [
  body('email').isEmail().normalizeEmail(), // Sanitiser et valider l'email inséré
  body('password').trim(), // Supprimer les espaces blancs dans le mot de passe inséré
], 
async function (req, res, next) {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, msg: `Veuillez renseigner tous les champs.` });
    }

    const check_email = await Promise.all([
      userStudents.findOne({ email }),
      userCompanies.findOne({ email }),
    ])

    if (check_email) {
      return res.json({ success: false, msg: `L'adresse email ${email} est déjà associée à un compte.` });
    }

    const hash_password = await hashPassword(password, 10);

    const user = await userCompanies.create({
      ...req.body,
      password: hash_password,
    });

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(error)
    return res.json({ success: false, msg: `Une erreur s'est produite lors de la création du compte` });
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