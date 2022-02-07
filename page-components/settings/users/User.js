import React, { useState } from 'react';

import { Form, TypeInput, Button, Flex, Grid } from 'components';

import * as api from 'api-axios/users';

import css from './User.module.scss';

export const User = ({ data }) => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    _id: data._id,
    username: data.username,
    group: data.group,
    role: '',
    email: '',
  });

  async function handleSubmit(e, formData) {}
  async function handleChange(e, objKey) {}
  async function formButton(e) {
    e.preventDefault();
    setActive(!active);
  }

  return !active ? (
    <div className={`bg ${css.card}`} onClick={() => setActive(!active)}>
      <p className="sc">{data.username}</p>
      <h5 className="sc">{data.email}</h5>
      <p className="sc">{data.group}</p>
      <p className="sc">{data.role}</p>
    </div>
  ) : (
    <Form className={css.form} onSubmit={e => e.preventDefault()}>
      <Grid gap="2rem">
        <TypeInput
          label="username"
          value={formData.username}
          onChange={e => handleChange(e, 'username')}
        />
        <TypeInput
          label="group"
          value={formData.group}
          onChange={e => handleChange(e, 'group')}
        />
      </Grid>

      <Grid gap="2rem">
        <TypeInput
          label="role"
          value={formData.role}
          type="select"
          onChange={e => handleChange(e, 'role')}
        />
        <TypeInput
          label="email"
          value={formData.email}
          onChange={e => handleChange(e, 'email')}
        />
      </Grid>

      <Button
        text="Close"
        padding="0.5rem 1rem"
        margin="1rem 0 0 0"
        onClick={e => formButton(e)}
      />
    </Form>
  );
};
