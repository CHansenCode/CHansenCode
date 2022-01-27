import React, { useState, useRef, useEffect } from 'react';

import fetchJson, { FetchError } from 'lib/fetchJson';
import useUser from 'lib/useUser';

import css from './Form.module.scss';

export const Form = ({ open }) => {
  //
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { mutateUser } = useUser();

  useEffect(() => {
    inputRef && inputRef.current.focus();
  }, [inputRef]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formData),
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className={`${css.form} pc5b bg ${open ? css.open : ''}`}
      onSubmit={handleSubmit}
    ></form>
  );
};
