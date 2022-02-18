import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TypeInput, Grid, Form } from 'components';

import * as api from 'api-lib/dispatch/slides';

import css from './style.module.scss';

export const New = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    formData.length > 1 ? setValid(true) : setValid(false);
  }, [formData]);

  async function openForm() {
    setOpen(true);
  }
  async function clearFormAndClose(e) {
    e.preventDefault();
    setOpen(false);
    setFormData('');
  }

  async function handleSubmit(e, formData) {
    console.log(formData);
    e.preventDefault();
    try {
      dispatch(api.postOne(formData));
      clearFormAndClose(e);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li className={css.item_new}>
      {open ? (
        <Form padding="0.75rem" onSubmit={e => handleSubmit(e, formData)}>
          <TypeInput
            label="Enter name of presentation"
            value={formData}
            onChange={e => setFormData(e.target.value)}
          />
          <Grid gap="1rem">
            <Button
              text="SUBMIT"
              padding="0.15rem"
              disabled={!valid}
              onClick={e => handleSubmit(e, formData)}
            />
            <Button
              text="CLOSE"
              padding="0.15rem"
              onClick={e => clearFormAndClose(e)}
            />
          </Grid>
        </Form>
      ) : (
        <Button
          height="100%"
          width="100%"
          style={{ outline: 'transparent' }}
          text="CREATE NEW"
          onClick={openForm}
        />
      )}
    </li>
  );
};
