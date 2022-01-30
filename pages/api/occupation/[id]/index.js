import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import { ObjectId } from 'mongodb';

import { allMediaPosts } from 'apiCalls/db/media';

const handler = nextConnect();
handler.use(middleware);

const col = 'occupation';

handler.get(async (req, res) => {
  const { id } = req.query;

  res.json();
});

handler.put(async (req, res) => {
  const { id } = req.query;
  const { data } = req;

  try {
    let resData = await req.db
      .collection('occupation')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: 'after' },
      );

    res.status(202).json(resData);
  } catch (error) {
    res.status(500).json(`Error patching ${id} in ${col} db: ${error}`);
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;

  try {
    const resData = await req.db
      .collection('occupation')
      .deleteOne({ _id: ObjectId(id) });

    res.status(202).json(`${id}: succesfully deleted`);
  } catch (error) {
    res.status(500).json(`Error deleting ${id} in ${col} db: ${error}`);
  }
});

export default handler;
