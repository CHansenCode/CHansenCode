import React, { useState } from 'react';
import { Input, Button } from 'chansencode-lib';

import fetchJson, { FetchError } from 'lib/fetchJson';
import useUser from 'lib/useUser';

import css from './Form.module.scss';

export const Form = ({ open }) => {
  //
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const { mutateUser } = useUser();

  async function onChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      username: formData.username,
    };

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.log('An unexpected error happened:', error);
      }
    }
  }

  return (
    <form
      className={`${css.form} pc5b bg ${open ? css.open : ''}`}
      onSubmit={handleSubmit}
    >
      <>
        <Input
          className="pc5b"
          placeholder="username"
          value={formData.username}
          onChange={e => onChange(e, 'username')}
        />
        <Input
          className="pc5b"
          placeholder="password"
          value={formData.password}
          onChange={e => onChange(e, 'password')}
          type={showPassword ? 'input' : 'password'}
        />
      </>

      <Button className="pc5b" onClick={handleSubmit}>
        Log In
      </Button>
    </form>
  );
};
