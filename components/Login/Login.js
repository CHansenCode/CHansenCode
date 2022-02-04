import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { Form, Input, Button } from 'components';
import useUser from 'lib/useUser';

import css from './Login.module.scss';

export const Login = ({ ...props }) => {
  const { mutateUser } = useUser({
    redirectIfFound: true,
    redirectTo: '/welcome',
  });

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ ...initFormData });

  const inputRef = useRef();

  useEffect(() => {
    inputRef && open && inputRef.current.focus();
  }, [open]);

  async function onChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post('api/login', formData);

      mutateUser(data);
    } catch (error) {
      console.log('could not auth');
    }
  }

  const iStyle = {
    opacity: open ? '1' : '0',
    pointerEvnts: open ? 'all' : 'none',
  };

  return (
    <div className={css.menu_item}>
      <li onClick={() => setOpen(!open)} className={open ? 'sc' : ''}>
        logIn
      </li>

      <div style={iStyle} className={css.form_wrapper}>
        <Form title="log in" onSubmit={handleSubmit} className={css.form}>
          <Input
            required
            label="username"
            myRef={inputRef}
            value={formData.username.toLowerCase()}
            onChange={e => onChange(e, 'username')}
          />
          <Input
            required
            label="password"
            value={formData.password}
            onChange={e => onChange(e, 'password')}
            type="password"
          />
          <Button
            margin="0.5rem 0 0 0"
            padding="0.5rem"
            text="Log in"
            onClick={handleSubmit}
          />
        </Form>
      </div>
    </div>
  );
};

const initFormData = {
  username: '',
  password: '',
};
