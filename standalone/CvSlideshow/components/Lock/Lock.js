import { useState } from 'react';

import { Form, Input, Button, Empty } from 'components';

import css from './Lock.module.scss';

export const Lock = ({ whom, setWhom }) => {
  //
  const [formData, setFormData] = useState('');
  const [sendKey, setSendKey] = useState('');
  const [noKey, setNoKey] = useState(false);

  async function validateKey(e) {
    e.preventDefault();
    setWhom(formData);
  }

  async function handleSendKey(e) {
    e.preventDefault();
    alert('not implemented yet');
  }

  return (
    <div className={css.wrapper}>
      <div>
        <h4>Hello, and welcome.</h4>

        <br />

        <p>Please past in your provided keyword in the box below.</p>
      </div>

      <Empty height="2rem" />

      <Form className={css.form} onSubmit={validateKey}>
        <Input
          required
          label="key"
          value={formData}
          onChange={e => setFormData(e.target.value)}
        />
      </Form>

      <Empty height="2rem" />

      <Button
        uppercase
        width="100%"
        padding="0.5rem"
        text={formData ? 'Validate' : "I don't have a key"}
        onClick={formData ? e => validateKey(e) : () => setNoKey(!noKey)}
      />

      {noKey && (
        <div
          style={{
            height: noKey ? 'min-content' : '1px',
            overflow: 'hidden',
            transition: '0.3s ease',
          }}
        >
          <Empty height="2rem" />

          <p className="sc">Should you have a key?</p>
          <p>
            Then i applogize for the inconvenience, please type in a name in the
            box below that i can identify you with and i will recieive a message
            to take action from.
          </p>

          <Form onSubmit={handleSendKey}>
            <Input value={sendKey} onChange={e => setSendKey(e.target.value)} />
            <Button
              className="pc1b"
              padding="0.35rem"
              width="100%"
              text="Send me a key"
              onClick={handleSendKey}
            />
          </Form>

          <br />
          <p className="sc">Who has a key?</p>
          <p>
            This page is a tool i have developed in conjunction with my own
            education in Front-End programming. I utilize it to easily
            distribute unique cv application while showcasing my developer
            competencies within the react framework
          </p>
        </div>
      )}
    </div>
  );
};
