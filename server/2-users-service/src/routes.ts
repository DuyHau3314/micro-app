import { Application } from 'express';
import { healthRoutes } from '@users/routes/health';
import { userRoutes } from '@users/routes/user';

import { verifyGatewayRequest } from './middlewares/gateway-middleware';

const USER_BASE_PATH = '/api/v1/user';

const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(USER_BASE_PATH, verifyGatewayRequest, userRoutes());
};

export { appRoutes };
