import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button } from 'components';

import * as api from 'api-lib/dispatch/cv';

export const NoPid = ({ ...props }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState('');

  async function handleSubmit(e, formData) {
    e.preventDefault();
    formData.length > 1 && dispatch(api.findOneByWhom(formData));
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

            <Button
              width="100%"
              padding="0.5rem 1rem"
              text="submit"
              disabled={formData.length < 2 ? true : false}
            />
          </Form>
        </div>
      </div>

      <style jsx>
        {`
          .cv_no_pid {
            height: 100vh;
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
