import { IUserDocument } from '@users/interfaces/user-interface';
import { userSchema } from '@users/schemes/user';
import { createUser, getUserByEmail } from '@users/services/user.service';
import { BadRequestError } from '@users/utils/error-handler';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const user = async (req: Request, res: Response): Promise<void> => {
  const { error } = await Promise.resolve(userSchema.validate(req.body));
  if (error?.details) {
    throw new BadRequestError(error.details[0].message, 'Create user() method error');
  }
  const checkIfUserExist: IUserDocument | null = await getUserByEmail(req.body.email);
  if (checkIfUserExist) {
    throw new BadRequestError('User already exist. Go to your account page to update.', 'Create user() method error');
  }
  const userAdded: IUserDocument = {
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    description: req.body.description
  };
  const createdUser: IUserDocument = await createUser(userAdded);
  res.status(StatusCodes.CREATED).json({ message: 'User created successfully.', user: createdUser });
};

export { user };
