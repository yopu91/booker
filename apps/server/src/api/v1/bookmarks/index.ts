import Router from '@koa/router';
import { getBookmarks, addBookmark } from './controller';

const BookmarkRouter = new Router();

BookmarkRouter.get('/', getBookmarks);
BookmarkRouter.post('/', addBookmark);

export default BookmarkRouter.routes();
