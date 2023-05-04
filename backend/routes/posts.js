const router = require("express").Router();
const User = require("../models/User");
const verifyToken = require('./verifyToken')

router.get('/', verifyToken, (req,res) => {
    res.send(200)
})

module.exports = router;