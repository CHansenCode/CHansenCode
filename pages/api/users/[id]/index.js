import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { findByIdAndUpdate, findByIdAndDelete, findById } from 'api-db/media';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const id = req.query;

  try {
    const response = await findById(req.db, id);

    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wong' });
  }
});

handler.patch(async (req, res) => {
  const formData = req.body;

  try {
    const response = await findByIdAndUpdate(req.db, formData._id, formData);

    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wong' });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;

  try {
    const response = await findByIdAndDelete(req.db, id);

    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wong' });
  }
});

export default handler;
