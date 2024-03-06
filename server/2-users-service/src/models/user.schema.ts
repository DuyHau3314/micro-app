import { IUserDocument } from '@users/interfaces/user-interface';
import { Model, Schema, model } from 'mongoose';

const userSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false
  }
);

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');
export { UserModel };
