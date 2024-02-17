import { DataTypes, Model } from 'sequelize';
import Database from '../db';

const db = Database.getInstance().connection;

class BookmarkModel extends Model {}
BookmarkModel.init(
  {
    link: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.TEXT
    }
  },
  { sequelize: db, modelName: 'Bookmark' }
);

export { BookmarkModel };
