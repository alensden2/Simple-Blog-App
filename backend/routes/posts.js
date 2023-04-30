const router = require("express").Router();
const User = require("../models/User");
const verifyToken = require('./verifyToken')

router.get('/', verifyToken, (req,res) => {
    res.json({
        user: "John Snow",
        description: "Its snowing here!"
    })
})

module.exports = router;