import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { findByIdAndDelete } from 'api-db/contact';

const handler = nextConnect();
handler.use(middleware);

//

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
