import { IUserDocument } from '@users/interfaces/user-interface';
import { getRandomUsers } from '@users/services/user.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const random = async (req: Request, res: Response): Promise<void> => {
  const users: IUserDocument[] = await getRandomUsers(parseInt(req.params.size, 10));
  res.status(StatusCodes.OK).json({ message: 'Random user profile', users });
};

export { random };
