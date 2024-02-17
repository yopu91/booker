import Router from '@koa/router';
import BookmarkRouter from './bookmarks';

const v1Router = new Router();
v1Router.use('/bookmarks', BookmarkRouter);

export default v1Router.routes();
