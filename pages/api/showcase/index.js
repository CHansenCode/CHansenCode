import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();
handler.use(middleware);

import { getShowcase } from 'api-lib/db/media';

//

handler.get(async (req, res) => {
  try {
    const response = await getShowcase(req.db);

    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

export default handler;
