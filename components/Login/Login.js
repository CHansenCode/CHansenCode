import React, { useState, useEffect } from 'react';

import { Input } from 'chansencode-lib';
import { Form } from './Form';

import css from './Login.module.scss';

export const Login = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  props = {
    ...props,
    open,
    setOpen,
  };

  return (
    <div className={css.menu_item}>
      <li onClick={() => setOpen(!open)} className={open ? 'sc' : ''}>
        logIn
      </li>

      <div className={`${css.absolute} ${open ? css.absolute_open : ''}`}>
        <Form open={open} />
      </div>
    </div>
  );
};
