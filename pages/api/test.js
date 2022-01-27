import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const query = {};
  const options = {};

  let doc = await req.db.collection('Texts').find().toArray();

  res.json(doc);
});

handler.post(async (req, res) => {
  const query = {};

  console.log(req.data);
});

// handler.put(async (req, res) => {
//   const query = [];
//   const options = {};

//   let doc = await req.db.collection('Texts').find().toArray();

//   res.json(doc);
// });

export default handler;

// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ message: 'Hello from the Daily route' }));
// };

// import { MongoClient } from 'mongodb';

// const MONGOUSER = process.env.MONGO_USERNAME;
// const MONGOPASS = process.env.MONGO_PASSWORD;
// const MONGODB = process.env.MONGO_DB;
// const uri = `mongodb+srv://${MONGOUSER}:${MONGOPASS}@cluster0.fjwvs.mongodb.net/${MONGODB}?retryWrites=true&w=majority`;

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(uri);

// const dbName = 'test';

// export default async function main(req, res) {
//   try {
//     await client.connect();

//     console.log('Connected successfully to server');
//   } catch (error) {
//     res.json.status(404);
//   }

//   const db = client.db(dbName);
//   const collection = db.collection('Gallery');

//   const result = collection.find().toArray();

//   res.json(result);
// }
