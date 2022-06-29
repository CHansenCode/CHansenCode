import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserForm, List, Item } from './';

import * as api from 'api-lib/dispatch/users';

export const Users = ({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(api.getAll()), []);
  const store = useSelector(store => store.users);

  return (
    <div>
      <UserForm />

      <List>
        {store && store.map((u, i) => <Item key={u._id} data={u} {...props} />)}
      </List>
    </div>
  );
};
