import nextConnect from 'next-connect';

import { database } from './database';
//
//room for more middlewares
//

const middleware = nextConnect();

middleware.use(database);

export default middleware;
