import { useState } from 'react';
import { useRouter } from 'next/router';

import { Form, TypeInput, Button } from 'components';

export const NoPid = () => {
  const router = useRouter();
  const [formData, setFormData] = useState('');

  console.log(router.pathname);

  async function handleSubmit(e, formData) {
    e.preventDefault();

    router.push(`${router.pathname}/?pid=${formData}`);
  }

  return (
    <>
      <div className="cv_no_pid">
        <div className="cv_no_pid_inner">
          <p>
            {`This is a page that i have developed to share Applications with
            potential employers.`}
          </p>

          <br />

          <p>
            {`You are seeing this text because the unique key "?pid= <u>NAME</u> "
          wasn't provided. If you haven't received an email from me with the
          corresponding link then you are asked to go back to the homepage and
          continue browsing`}
          </p>

          <br />
          <br />

          <Form
            style={{ border: 'transparent' }}
            onSubmit={e => handleSubmit(e, formData)}
          >
            <TypeInput
              label="pId"
              value={formData}
              onChange={e => setFormData(e.target.value)}
            />

            {router.pathname}

            <br />

            <Button padding="0.5rem 1rem" text="submit" />
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
