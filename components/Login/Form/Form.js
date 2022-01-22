import React, { useState } from 'react';

import { Input, Button } from 'chansencode-lib';

import css from './Form.module.scss';

export const Form = ({ open }) => {
  //
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  async function onChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    alert('not implemented yet');
  }

  return (
    <form
      className={`${css.form} pc5b bg ${open ? css.open : ''}`}
      onSubmit={onSubmit}
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

      <Button className="pc5b" onClick={onSubmit}>
        Log In
      </Button>
    </form>
  );
};
