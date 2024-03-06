import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUserDocument } from '@users/interfaces/user-interface';
import { createUser } from '@users/services/user.service';

const seed = async (req: Request, res: Response): Promise<void> => {
  const { count } = req.params as { count: string };

  for(let i = 0; i < Number(count); i++) {
    const user: IUserDocument = {
      email: faker.internet.email(),
      fullName: faker.person.fullName(),
      username: faker.internet.userName(),
      description: faker.lorem.paragraph(),
    };

    await createUser(user);
  }

  res.status(StatusCodes.CREATED).json({ message: 'User created successfully' });
};

export { seed };
