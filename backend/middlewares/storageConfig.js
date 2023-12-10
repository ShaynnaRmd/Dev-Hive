const multer = require('multer')

const storage = multer.diskStorage({ // "multer.diskStorage" spécifie que les fichiers sont stockés sur le disque plutôt que dans la mémoire 
    destination : function (req, file, callback) { // Spécifie le répertoire où sont sauvegardés les fichiers
        callback(null, 'uploads/')
    },

    filename: function (req, file, callback) { // Spécifie le nom du fichier stocké
        callback(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload