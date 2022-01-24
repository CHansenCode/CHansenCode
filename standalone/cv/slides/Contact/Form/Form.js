import React, { useState } from 'react';

import { Button, Input, Textarea } from 'chansencode-lib';

import css from './Form.module.scss';

export const Form = ({ puzzValid, ...props }) => {
  //
  const [formData, setFormData] = useState({
    title: '',
    contactInfo: '',
    message: '',
  });

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    alert(formData.title);
  }

  return (
    <div className={`pc3b ${css.wrapper}`}>
      <form onSubmit={handleSubmit}>
        <h4 className="sc">Kontaktformulär</h4>

        <>
          <Input
            label="subject:"
            type="text"
            onChange={e => handleChange(e, 'title')}
          />
          <Input
            label="contact info:"
            type="text"
            onChange={e => handleChange(e, 'contactInfo')}
          />
          <Textarea
            label="meddelande"
            rows="6"
            onChange={e => handleChange(e, 'message')}
          />
        </>

        <Button className={puzzValid ? css.valid_button : css.invalid_button}>
          {puzzValid ? 'SEND' : 'Please enter correct pattern'}
        </Button>
      </form>
    </div>
  );
};
