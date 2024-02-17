import { BookmarkModel } from '../../../models/BookmarkModel';
import Koa from 'koa';

async function getBookmarks(ctx: Koa.Context) {
  ctx.body = await BookmarkModel.findAll();
}

async function addBookmark(ctx: Koa.Context) {
  const ctxBody = ctx.request.body;
  ctx.body = await BookmarkModel.create({
    link: ctxBody.link,
    note: ctxBody.note
  });
}

export { getBookmarks, addBookmark };
