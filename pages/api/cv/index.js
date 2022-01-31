import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { getAllMedia, postMedia } from 'apiCalls/db/media';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const response = await getAllMedia(req.db);

  res.json(response);
});

handler.post(async (req, res) => {
  const formData = req.body;

  try {
    const { insertedId } = await postMedia(req.db, formData);

    res.json({ ...formData, _id: insertedId });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default handler;
