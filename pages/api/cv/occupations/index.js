import nextConnect from 'next-connect';
import middleware from 'middleware/database';

import { getAllOccupations } from 'api-lib/db/cv';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const response = await getAllOccupations(req.db);

  res.json(response);
});

export default handler;
