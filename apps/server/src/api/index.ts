import Router from '@koa/router';
import v1Router from './v1';

const apiRouter = new Router({ prefix: '/api' });
apiRouter.use('/v1', v1Router);
export default apiRouter;
