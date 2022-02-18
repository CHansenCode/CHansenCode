import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button, Flex, Cimage } from 'components';
import { init } from '../';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';

export const FixedForm = ({ formData, setFormData, ...props }) => {
  const dispatch = useDispatch();

  let open = props.activeId || props.controller.isCreating ? true : false;

  async function clear() {
    setFormData({ ...init.form });
    props.setActiveId('');
    props.setController({ ...init.contr });
  }
  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (props.activeId) {
      try {
        dispatch(api.patchOne(props.activeId, formData));
        clear();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(api.postOne(formData));
        clear();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={`${css.fixed}${open ? ` ${css.open}` : ''}`}>
      <div className={css.inner}>
        <Form
          title={props.activeId ? `Editing: ${props.activeId}` : 'creating new'}
          onSubmit={e => e.preventDefault()}
        >
          <header>
            <TypeInput
              label="title"
              value={formData.title}
              onChange={e => handleChange(e, 'title')}
            />
            <Cimage />
          </header>

          <TypeInput
            label="alt"
            type="textarea"
            value={formData.alt}
            onChange={e => handleChange(e, 'alt')}
          />

          <div>
            <div>
              <TypeInput
                label="drawingType"
                value={formData.drawingType}
                onChange={e => handleChange(e, 'drawingType')}
              />
              <TypeInput
                label="url"
                value={formData.url}
                onChange={e => handleChange(e, 'url')}
              />
            </div>
          </div>

          <Flex>
            <Button
              padding="1rem"
              text={props.activeId ? 'Update' : 'create new'}
              onClick={e => handleSubmit(e)}
            />

            <Button padding="1rem" text={'clear'} onClick={() => clear()} />
          </Flex>
        </Form>
      </div>
    </div>
  );
};
