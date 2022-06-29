import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import bcrypt from 'bcrypt';
import { auth } from 'api-lib/db/auth';

export default withIronSessionApiRoute(async (req, res) => {
  const { username, password } = await req.body;

  const userData = {
    username: username,
    password: password,
  };

  let dbRes = await auth(userData);
  dbRes.error && res.status(400).json(dbRes.error.message);

  const user = {
    username: dbRes.username,
    isLoggedIn: true,
    role: dbRes.role,
    group: dbRes.group,
    organisation: dbRes.organisation,
  };

  try {
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}, sessionOptions);
