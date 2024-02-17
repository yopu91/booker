import Database from '../db';
const db = Database.getInstance().connection;

async function initiateModels() {
  require('./BookmarkModel');
  await db.sync({ force: true });
}

export { initiateModels };
