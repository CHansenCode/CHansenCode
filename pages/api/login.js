import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';

export default withIronSessionApiRoute(async (req, res) => {
  const { username } = await req.body;

  try {
    const user = { isLoggedIn: true, username: username };

    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
