var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
  res.json({ email:'hihi@haha.hoho', username:'haha'})
})

module.exports = router;
>>>>>>> 74a8a81f2a98228eed45a8b7b9b94ca53590e300
