import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { findByIdAndUpdate, findByIdAndDelete, findOneByWhom } from 'api-db/cv';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const { pid } = req.query;

  try {
    const cv = await findOneByWhom(req.db, pid);

    res.json(cv);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

handler.patch(async (req, res) => {
  const formData = req.body;

  try {
    const response = await findByIdAndUpdate(req.db, formData._id, formData);

    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wrong' });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;

  try {
    const response = await findByIdAndDelete(req.db, id);

    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wrong' });
  }
});

export default handler;
