const router = require("express").Router();
const User = require("../models/User");

router.get('/', (req,res) => {
    res.json({
        user: "John Snow",
        description: "Its snowing here!"
    })
})

module.exports = router;