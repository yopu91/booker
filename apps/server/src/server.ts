import Koa from 'koa';
import bodyParser from '@koa/bodyparser';
import cors from '@koa/cors';

import router from './api/index';

const app = new Koa();

const PORT = process.env.PORT || 3004;

function startServer() {
  app.use(cors());
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(PORT, () => {
    console.log('LISTENING on:', PORT);
  });
}

export { startServer };
