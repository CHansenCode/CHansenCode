import { useState } from 'react';
import { useRouter } from 'next/router';

import { Form, TypeInput, Button } from 'components';

export const NoPid = () => {
  const router = useRouter();
  const [formData, setFormData] = useState('');

  async function handleSubmit(e, formData) {
    e.preventDefault();
    router.replace(`${router.pathname}/?pid=${formData}`);
  }

  return (
    <>
      <div className="cv_no_pid">
        <div className="cv_no_pid_inner">
          <p className="sc">* Restricted Access</p>

          <br />

          <Form
            padding="0"
            style={{ border: 'transparent' }}
            onSubmit={e => handleSubmit(e, formData)}
          >
            <TypeInput
              label="Please enter your provided key"
              value={formData}
              onChange={e => setFormData(e.target.value)}
            />

            <br />

            <Button width="100%" padding="0.5rem 1rem" text="submit" />
          </Form>
        </div>
      </div>

      <style jsx>
        {`
          .cv_no_pid {
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cv_no_pid_inner {
            max-width: 600px;
            height: min-content;
          }
        `}
      </style>
    </>
  );
};
