import Joi, { ObjectSchema } from 'joi';

const userSchema: ObjectSchema = Joi.object().keys({
  fullName: Joi.string().required().messages({
    'string.base': 'Fullname must be of type string',
    'string.empty': 'Fullname is required',
    'any.required': 'Fullname is required'
  }),
  _id: Joi.string().optional(),
  id: Joi.string().optional(),
  username: Joi.string().optional(),
  email: Joi.string().optional(),
  description: Joi.string().required().messages({
    'string.base': 'Please add a user description',
    'string.empty': 'User description is required',
    'any.required': 'User description is required'
  })
});

export { userSchema };
