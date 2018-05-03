const   express     = require('express'),
        router      = express.Router(),
        passport    = require('passport'),
        authRoutes  = require('./authRoutes');

router.get("/", (req, res) => {
    res.send("api landing");
});

router.use('/auth', authRoutes);

module.exports = router;