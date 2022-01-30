import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import { sendError } from 'next/dist/server/api-utils';

const handler = nextConnect();
handler.use(middleware);

const col = 'occupation';

//

handler.get(async (req, res) => {
  try {
    const resData = await req.db.collection(col).find().toArray();

    res.status(202).json(resData);
  } catch (error) {
    res.status(500).json(`Couldn't connect to ${col} db: ${error}`);
  }
});

handler.post(async (req, res) => {
  const query = {};
  const options = {};

  try {
    let resData = await req.db
      .collection(col)
      .insertOne(req.body, { returnDocument: 'after' });

    res.status(200).json(resData);
  } catch (error) {
    res.status(500).json(`Couldn't post to ${col} db: ${sendError}`);
  }
});

export default handler;
