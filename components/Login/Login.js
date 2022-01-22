import React, { useState, useEffect } from 'react';

import { Input } from 'chansencode-lib';

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

      {open && <LoginForm {...props} />}
    </div>
  );
};

const LoginForm = ({ open, setOpen }) => {
  //
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  return (
    <div className={`${css.form} pc5b ${open ? css.open : ''}`}>
      <>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
      </>

      <button style={{ width: '100%', marginTop: '0.5rem' }}>
        <h4>Log In</h4>
      </button>
    </div>
  );
};
