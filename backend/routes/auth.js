const router = require("express").Router();
const User = require("../models/User");
const Joi = require("@hapi/joi");
const { registrationValidation, loginValidation } = require("./validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  // validation for object (request)
  const { error } = registrationValidation(req.body);
  if (error) {
    res.status(400).send(error);
    return; // add this line to stop further execution of the function
  }
  // checking if the user already has an email in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already exists");
  }

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
    // res.send(saveUser);
    res.send("User Registered")
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  // validate the req obj
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error);
  // check if the email exists and pulling the record in the 'user'
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email invalid");

  // comparing the pass word
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  // creating jwt
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header('auth-token', token);
  // res.send('Logged in successfully');
  res.status(200).json({token: token});
});

module.exports = router;
