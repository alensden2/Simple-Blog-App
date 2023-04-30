const Joi = require("@hapi/joi");

const registrationValidation = async (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return await schema.validateAsync(data);
};

const loginValidation = async (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return await schema.validateAsync(data);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
