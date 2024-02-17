import { Sequelize } from 'sequelize';
const DATABASE_URL: string = process.env.DATABASE_URL ?? '';

export default class Database {
  private static instance: Database;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  connection: any;

  private constructor(pathToDb: string) {
    this.connection = new Sequelize({
      dialect: 'sqlite',
      storage: pathToDb
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database(DATABASE_URL);
    }
    return Database.instance;
  }
}
