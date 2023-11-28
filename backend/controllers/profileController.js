const user = require("../models/user")
const { body, validationResult } = require("express-validator") // Pour validation et désinfection des inputs dans le body
const upload = require('../middlewares/storageConfig')
const multer = require('multer')

// --------------------MODULES--------------------

module.exports.displayProfile = async (req, res, next) => {
    try {
        const profile = await user.findById(req.params.id)
        console.log(profile)

        if (!profile) {
            return res.status(404).json({ success: false, msg: "Aucun profil n'a été trouvé." })
        }

        return res.status(200).json({ success: true, data: profile })

    } catch (error) {
        console.log(error)
    }
}

module.exports.uploadProfilePicture = async (req, res, next) => {
    try {
        upload.single('profilePicture')(req, res, async function (err) {
            // Une erreur liée à Multer s'est produite lors de l'envoi du fichier
           if (err instanceof multer.MulterError) {
               return res.status(500).json({ success: false, msg: 'Multer error' })

           // Une autre erreur s'est produite
           } else if (err) {
               return res.status(500).json({ success: false, msg: 'Unexpected error' })
           }

           const profilePicture = req.file // req.files permet d'accéder au fichier téléchargé
           
           const updatedProfile = await user.findByIdAndUpdate(
               req.params.id,
               { $set: { 'profile.profilePicture' : profilePicture.filename } },
               { new: true, runValidators: true }
           );

           return res.status(200).json({ success: true, data: updatedProfile })
       })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error })
    }
}

module.exports.updateProfile = async (req, res, next) => {
    try {
        // const updatedProfile = await user.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) // new: true permet de renvoyer la nouvelle entrée
        // return res.status(200).json({ success: true, data: updatedProfile })

        const { firstname, lastname, description, stack } = req.body
        const updateFields = {}

        if (firstname) { updateFields['profile.firstname'] = firstname }
        if (lastname) { updateFields['profile.lastname'] = lastname }
        if (description) { updateFields['profile.description'] = description }
        if (stack) { updateFields['profile.stack'] = stack }
            
        const updatedProfile = await user.findByIdAndUpdate(
            req.params.id,
            { $set: updateFields },
            { new: true, runValidators: true }
        )

        return res.status(200).json({ success: true, data: updatedProfile })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error })
    }
}

// const { 
//     firstname, lastname, description, profilePicture, stack
//  } = req.body || {}

// const updatedProfile = await user.findByIdAndUpdate(
//     req.params.id,
//     { $set: { 
//         "profile.firstname": firstname,
//         "profile.lastname": lastname,
//         "profile.description": description,
//         "profile.profilePicture": profilePicture,
//         "profile.stack": stack
//     }}, { new: true, runValidators: true }
// )
// await updatedProfile.save()

// return res.status(200).json({ succcess: true, date: updatedProfile })