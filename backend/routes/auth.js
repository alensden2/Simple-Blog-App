const router = require("express").Router();
const User = require("../models/User");
const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req, res) => {
  const { error } = await schema.validateAsync(req.body);

  if (error) return res.status(400).send(error);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
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
