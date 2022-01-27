import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const query = {};
  const options = {};

  let doc = await req.db.collection('Media').find().toArray();

  res.json(doc);
});

handler.post(async (req, res) => {
  const query = {};
});

export default handler;
