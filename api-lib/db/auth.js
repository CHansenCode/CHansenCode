import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'chansendesign';
const coll = 'Users';

export async function auth({ username, password }) {
  await client.connect();
  const db = client.db(dbName);

  const user = await db.collection(coll).findOne({ username: username });

  if (!user) {
    return { error: { message: `${username} not found in database` } };
  }

  const validatePsw = await bcrypt.compare(password, user.password);

  if (!validatePsw) {
    return { error: { message: 'Incorrect password' } };
  }

  return { ...user, password: undefined };
}
