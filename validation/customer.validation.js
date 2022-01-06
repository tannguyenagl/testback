import Joi from "joi";

// const ObjectId = JoiObjectId(Joi);

export const createDataSchema = Joi.object({
  name: Joi.string().strip().required(),
  email: Joi.string().email().strip().required(),
  phone: Joi.string().strip().required(),
  gender: Joi.string().valid("M", "F").strip().required(),
  description: Joi.string().strip().required(),
});
