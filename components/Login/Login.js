import React, { useState, useEffect } from 'react';

import { Input } from 'chansencode-lib';
import { Form } from './Form';
import useUser from 'lib/useUser';

import css from './Login.module.scss';

export const Login = ({ ...props }) => {
  const { user } = useUser();

  const [open, setOpen] = useState(false);

  props = {
    ...props,
    open,
    setOpen,
  };

  return !user?.isLoggedIn ? (
    <div className={css.menu_item}>
      <li onClick={() => setOpen(!open)} className={open ? 'sc' : ''}>
        logIn
      </li>

      <div className={`${css.absolute} ${open ? css.absolute_open : ''}`}>
        <Form open={open} />
      </div>
    </div>
  ) : (
    <div>
      <h4>avatar</h4>
    </div>
  );
};
