import { user as createUser } from '@users/controllers/user/create';
import { random } from '@users/controllers/user/get';
import { seed } from '@users/controllers/user/seed';
import express, { Router } from 'express';

const router: Router = express.Router();

const userRoutes = (): Router => {
  router.get('/random/:size', random);
  router.post('/create', createUser);
  router.put('/seed/:count', seed);

  return router;
};

export { userRoutes };
