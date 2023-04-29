const router = require("express").Router();
const User = require("../models/User");
const Joi = require("@hapi/joi");
const { registrationValidation } = require("./validation");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  // validation for object (request)
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error);

  // checking if the user already has an email in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");

  // HASH password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const saveUser = await user.save();
    console.log("user saved :", saveUser);
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
