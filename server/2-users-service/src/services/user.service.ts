import { UserModel } from '@users/models/user.schema';
import { IUserDocument } from '@users/interfaces/user-interface';

const getUserByEmail = async (email: string): Promise<IUserDocument | null> => {
  const user: IUserDocument | null = await UserModel.findOne({ email }).exec() as IUserDocument;
  return user;
};


const createUser = async (userData: IUserDocument): Promise<IUserDocument> => {
  const createdUser: IUserDocument = await UserModel.create(userData) as IUserDocument;
  return createdUser;
};

const getRandomUsers = async (size: number = 10): Promise<IUserDocument[]> => {
  const users: IUserDocument[] = await UserModel.aggregate([{ $sample: { size }}]);
  return users;
};


export {
  getUserByEmail,
  createUser,
  getRandomUsers
};
