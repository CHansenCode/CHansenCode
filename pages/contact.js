import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { initForm } from 'page-components/contact';
import { Section, Form, TypeInput, Grid, Button } from 'components';
import { TOAST } from 'actions';

import * as api from 'api-axios/contact';

export default function Contact() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...initForm });

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e, formData) {
    e.preventDefault();
    postOne(formData);
  }
  async function postOne(formData) {
    try {
      const data = await api.postOne(formData);
      clear();
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Message sent!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/contact, action: post', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Post attempt failed, please try again.',
        },
      });
    }
  }
  async function clear(e) {
    e && e.preventDefault();
    setFormData({ ...initForm });
  }

  return (
    <>
      <Section padding="20vh 0 0 0" />

      <Section>
        <Grid>
          <div></div>

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

            <div>
              <Button
                width="100%"
                padding="0.5rem 1rem"
                text="Submit"
                onClick={e => handleSubmit(e, formData)}
              />
            </div>
          </Form>
        </Grid>
      </Section>
    </>
  );
}
