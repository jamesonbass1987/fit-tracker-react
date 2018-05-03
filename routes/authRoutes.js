const   express = require('express'),
        router = express.Router(),
        AuthController = require('../controllers/auth_controller');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

module.exports = router;