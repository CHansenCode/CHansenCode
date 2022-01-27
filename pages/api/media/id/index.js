import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const query = {};
  const options = {};

  const { id } = req.query;

  let resData = await req.db.collection('Media').findOne(id);

  res.json(resData);
});

handler.post(async (req, res) => {
  const query = {};
});

export default handler;
