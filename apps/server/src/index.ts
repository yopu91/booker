import 'dotenv/config';
import { initiateModels } from './models';
import { startServer } from './server';

async function start() {
  await initiateModels();
  startServer();
}

start();
