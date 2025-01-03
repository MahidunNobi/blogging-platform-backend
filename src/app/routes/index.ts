import { Router } from 'express';
import { UserRouter } from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
