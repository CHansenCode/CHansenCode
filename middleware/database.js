import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

global.mongo = global.mongo || {};

//config
let dbName = 'chansendesign';

const getClient = async () => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  await global.mongo.client.connect();
  return global.mongo.client;
};

export async function database(req, res, next) {
  req.dbClient = await getClient();
  req.db = global.mongo.client.db(dbName);

  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
