const userStudents = require("../models/user_students")
const token = require("../models/token")

const bcrypt = require("bcryptjs"); // Pour le hashage des mots de passe
const { body, validationResult } = require("express-validator") // Pour validation et désinfection des inputs dans le body
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
// const crypto = require('crypto')

require('dotenv').config()
const JWT_KEY = process.env.JWT_KEY

// --------------------MODULES--------------------

module.exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body
    
        // Vérifications du remplissage des champs "email" et "mot de passe" ; renvoi d'un message d'erreur si l'un des champs manque
        if (!email || !password) {
            return res.json({ success: false, msg: `Veuillez renseigner tous les champs.` })
        }

        let user = await checkUser(email)
        console.log(user)

        if (!user) {
            return res.json({ success: false, msg: `L'adresse email ${email} n'est asociée à aucun compte.` })
        }

        // Vérification du mdp fourni en le comparant avec celui hashé dans la bdd avec la fonction "comparePassword"
        const check_password = await comparePassword(password, user.password);
        
        // Renvoie les données de l'utilisateur si les mdp correspondent ou msg d'erreur si ne correspondent pas
        if (check_password){
            let token = generateJWT(user._id)
            return res.json({ success: true, data: user, token })
        } else {
            return res.json({ success: false, msg: `L'adresse email ou le mot de passe est invalide, veuillez réessayer.` })
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: 'Erreur interne du serveur.' })
    }
}

// module.exports.logout = async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//         return res.json({ success: false, msg: error })
//     }
// }

module.exports.registerStudent = [
    body('email').isEmail().normalizeEmail(), // Sanitiser et valider l'email inséré
    body('password').trim(), // Supprimer les espaces blancs dans le mot de passe inséré
    async (req, res, next) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({ success: false, errors: errors.array() })
            }

            const { email, password } = req.body || {};
            
            if (!email || !password) {
                return res.json({ success: false, msg: `Veuillez renseigner tous les champs.` });
            }
        
            const check_user_student = await userStudents.findOne({email})
        
            if (check_user_student){
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
    }
]

module.exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body

        if (!email) {
            return res.json({ success: false, msg: `Veuillez renseigner une adresse email.` })
        }

        let user = await checkUser(email)
        console.log(user)

        if (!user) {
            return res.json({ success: false, msg: `L'adresse email ${email} n'est asociée à aucun compte.` })
        }

        const resetToken = jwt.sign({ userId:user._id }, JWT_KEY, { expiresIn: '1h' }) // On génère un token temporaire

        await addToken(email, resetToken) // On stocke le token dans la bdd

        // user.reset_token = resetToken
        // await user.save()

        // On envoie le mail contenant le lien de réinitialisation
        const resetLink = `http://localhost:3000/resetPassword/${resetToken}`
        await sendResetEmail(user.email, resetLink)

        return res.json({ success: true, msg: "Un email de réinitialisation du mot de passe a été envoyé à votre adresse email." })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: 'Erreur du server' })
    }
}

module.exports.resetPassword = async (req, res, next) => {
    try {
        const { password, confirmPassword } = req.body

        if (!password || !confirmPassword) {
            return res.json({ success: false, msg: "Veuillez renseigner tous les champs." })
        }

        if (password !== confirmPassword) {
            return res.json({ succes: false, msg: "Les mots de passe ne correspondent pas." })
        }

        const hash_password = await hashPassword(password, 10);
        const findToken = await token.findOne({ token: req.params.token })

        if (!findToken) {
            return res.json({ success: false, msg: "Token non valide." });
        }

        await updatePassword(findToken, hash_password)

        return res.json({ success: true, msg: "Mot de passe réinitialisé avec succés." })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: 'Erreur du server' })
    }
}


// --------------------FONCTIONS--------------------

// Fonction pour vérifier si l'email fourni est dans la bdd
const checkUser = async (email) => {
      try {  
        const checkUserStudent = await userStudents.findOne({email})

        if (checkUserStudent) {
            return checkUserStudent;
        } 

        return null

    } catch (error) {
        console.log(error)
        throw error
    }
}

// Fonction pour comparer les mots de passe 
async function comparePassword(password, hash_password) {
    try {
        const match = await bcrypt.compare(password, hash_password);
        return match;
    } catch (error) {
        throw error; 
    }
}

// Fonction de génération de jwt token
const generateJWT = (userId) => {
    return jwt.sign({ userId }, JWT_KEY, {expiresIn: '1h' })
}

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

// Fonction pour envoyer le mail de réinitialisation du mot de passe
const sendResetEmail = async (email, resetLink) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS
        }
    })

    const emailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Demande de réinitialisation de mot de passe',
        html: `Vous avez fait une demande de réinitialisation de mot de passe, veuillez cliquer sur le lien suivant afin de modifier votre mot de passe : <a href="${resetLink}">${resetLink}</a>" `
    }

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    })
}

// Fonction pour ajouter un token dans la bdd pour la réinitialisation du mdp
const addToken = async (email, resetToken) => {
    try {
        const checkUserStudent = await userStudents.findOne({email})

        if (checkUserStudent) {
            const newToken = await token.create({
                token: resetToken,
                user_student: checkUserStudent._id
            })
        } 

    } catch (error) {
        console.log(error)
    }
}

// Fonction pour modifier le mdp dans la bdd selon s'il s'agit d'un étudiant ou d'une entreprise
const updatePassword = async (findToken, hash_password) => {
    try {
        const studentQuery = { _id: findToken.user_student }
        const studentUpdate = { password: hash_password }
        await userStudents.findOneAndUpdate(studentQuery, studentUpdate, { runValidators: true})
        
    } catch (error) {
        console.log(error)
    }
}