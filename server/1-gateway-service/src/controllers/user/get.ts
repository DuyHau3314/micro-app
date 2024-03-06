import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '@gateway/services/api/user.service';

export class Get {
  public async random(req: Request, res: Response): Promise<void> {
    const response: AxiosResponse = await userService.getRandomUsers(req.params.size);
    res.status(StatusCodes.OK).json({ message: response.data.message, users: response.data.users });
  }
}
