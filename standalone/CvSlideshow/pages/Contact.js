import { useState, useEffect } from 'react';

import { StyledDiv, CheckPuzzle, Flex, FadeIn } from '../components';
import { Form, Input, Textarea, Button } from '../components';

import css from './styles/Contact.module.scss';

export const Contact = () => {
  const [puzzleValid, setPuzzleValid] = useState(false);
  const [formData, setFormData] = useState({ ...initFormData });

  useEffect(() => {}, [puzzleValid]);

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    alert('not implemented yet');
  }

  return (
    <FadeIn>
      <div className={css.main}>
        <StyledDiv>
          <CheckPuzzle setValid={setPuzzleValid} />
        </StyledDiv>

        <StyledDiv>
          <Flex size="100%" alignItems="center" justifyContent="center">
            {puzzleValid ? (
              <p>
                Christoffer Hansen <br /> Denmark
              </p>
            ) : (
              `Please enter the correct pattern to unlock the form`
            )}
          </Flex>
        </StyledDiv>

        <StyledDiv flex={true} center={true}>
          {puzzleValid ? (
            <Form title="contact form" border="none">
              <div>
                <Input
                  required={true}
                  label="contact info"
                  value={formData.contactInfo}
                  onChange={e => handleChange(e, 'contactInfo')}
                />
                <Textarea
                  required={true}
                  label="message"
                  rows="4"
                  value={formData.message}
                  onChange={e => handleChange(e, 'message')}
                />
              </div>

              <Button
                text="send"
                padding="0.5rem 1rem"
                margin="1rem 0 0 0"
                onClick={handleSubmit}
              />
            </Form>
          ) : (
            'Please enter the correct pattern to unlock the form'
          )}
        </StyledDiv>
      </div>
    </FadeIn>
  );
};

const initFormData = {
  contactInfo: '',
  subject: '',
  message: '',
};
