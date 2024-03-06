import { Create } from '@gateway/controllers/user/create';
import { Get } from '@gateway/controllers/user/get';
import express, { Router } from 'express';

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/user/random/:size', Get.prototype.random);
    this.router.post('/user/create', Create.prototype.user);

    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
