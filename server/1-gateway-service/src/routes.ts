import { Application } from 'express';
import { userRoutes } from '@gateway/routes/user';

import { healthRoutes } from './routes/health';
const BASE_PATH = '/api/gateway/v1';

export const appRoutes = (app: Application) => {
  app.use('', healthRoutes.routes());
  app.use(BASE_PATH, userRoutes.routes());
};
