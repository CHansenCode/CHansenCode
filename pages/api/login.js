import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import bcrypt from 'bcrypt';
import { auth } from 'api-db/auth';
import { database } from 'middleware/database';

export default withIronSessionApiRoute(async (req, res) => {
  const { username, password } = await req.body;
  const hashed = await bcrypt.hash(password, 10);

  const userData = {
    username: username,
    password: hashed,
  };

  let dbData;

  try {
    dbData = await auth(userData);
  } catch (error) {
    res.status(403).json(error);
  }

  dbData.error && res.status(400).json(dbData.error.message);

  const user = {
    username: dbData.username,
    isLoggedIn: true,
    role: dbData.role,
    group: dbData.group,
    organisation: dbData.organisation,
  };

  try {
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}, sessionOptions);
