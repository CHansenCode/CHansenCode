import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { getAll, findOne, postOne } from 'api-db/cv';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const response = await getAll(req.db);

  res.json(response);
});

handler.post(async (req, res) => {
  const formData = req.body;

  try {
    const { insertedId } = await postOne(req.db, formData);
    res.json({ ...formData, _id: insertedId });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default handler;

// const { pid } = req.query;

// pid
//   ? (res.data = await findOne(req.db, pid))
//   : (res.data = await getAll(req.db));

// res.data ? res.json(res.data) : res.status(400).json('no user found');

// res.json(res.data);
