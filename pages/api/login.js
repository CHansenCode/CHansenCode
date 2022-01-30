import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import bcrypt from 'bcrypt';

export default withIronSessionApiRoute(async (req, res) => {
  const { username, password } = await req.body;
  const userData = {
    username: username,
    password: bcrypt.hash(password, 10),
  };

  try {
    const user = {
      isLoggedIn: true,
      username: userData.username,
      password: userData.password,
    };

    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
