import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    // const userData = await authRequest(req.db, req.body);
    res.json(req.body);
    // res.json({ ...userData });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default handler;
