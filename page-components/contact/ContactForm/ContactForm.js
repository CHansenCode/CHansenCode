import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button, Grid } from 'components';
import { init } from 'page-components/contact';

import * as api from 'api-lib/dispatch/contact';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ ...init.form });
  const [valid, setValid] = useState({ ...init.valid });

  const dispatch = useDispatch();

  useEffect(() => {
    formData.name.length > 2
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  }, [formData.name]);

  useEffect(
    () =>
      formData.contactInfo.length > 2
        ? setValid({ ...valid, contactInfo: true })
        : setValid({ ...valid, contactInfo: false }),
    [formData.contactInfo],
  );

  useEffect(() => {
    formData.message.length > 2
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  //

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e, formData) {
    e.preventDefault();
    try {
      dispatch(api.postOne(formData));
      clear();
    } catch (error) {
      console.log(error);
    }
  }
  async function clear(e) {
    e && e.preventDefault();
    setFormData({ ...init.form });
  }

  return (
    <Form title="contact form" onSubmit={e => handleSubmit(e, formData)}>
      <div
        style={{
          pointerEvents: 'all',
          opacity: '0',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <TypeInput
          dummy={true}
          value={formData.dummy}
          onChange={e => handleChange(e, 'dummy')}
        />
      </div>

      <TypeInput
        label="name"
        type="input"
        value={formData.name}
        onChange={e => handleChange(e, 'name')}
      />
      <TypeInput
        label="contact info"
        type="input"
        value={formData.contactInfo}
        onChange={e => handleChange(e, 'contactInfo')}
      />
      <TypeInput
        label="message"
        type="textarea"
        rows="4"
        value={formData.message}
        onChange={e => handleChange(e, 'message')}
      />

      <Grid gap="1rem">
        <Button
          width="100%"
          padding="0.25rem 1rem"
          text="Submit"
          onClick={e => handleSubmit(e, formData)}
        />
        <Button
          width="100%"
          padding="0.25rem 1rem"
          text="Clear"
          onClick={e => clear(e)}
        />
      </Grid>
    </Form>
  );
};
