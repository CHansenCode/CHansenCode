import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button, Flex } from 'components';
import { init } from '../';
import { InputImage } from './InputImage';
import { Fixed } from './Fixed';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';
import * as compress from './imgCompression';
import { populateModal } from 'api-lib/dispatch/imgModal';

export const FixedForm = ({ formData, setFormData, ...props }) => {
  const dispatch = useDispatch();

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
    <Fixed {...props}>
      <Form onSubmit={e => e.preventDefault()}>
        <header className={css.header}>
          <div className={css.title}>
            <Flex justifyContent="space-between">
              <h4 className="sc">
                {props.activeId ? 'Editing' : 'Creating new'}
              </h4>

              {formData.uri.web && (
                <Button
                  height="2rem"
                  width="6rem"
                  borderRadius="50%"
                  text="view fullsize"
                  onClick={() => dispatch(populateModal(formData))}
                />
              )}
            </Flex>

            <div style={{ width: '100%' }}>
              <TypeInput
                label="title"
                value={formData.title}
                onChange={e => handleChange(e, 'title')}
              />
              <TypeInput
                label="category"
                type="select"
                options={[
                  'architecture',
                  'webdesign',
                  'digital graphics',
                  'other',
                ]}
                value={formData.category}
                onChange={e => handleChange(e, 'title')}
              />
            </div>
          </div>

          <InputImage
            formData={formData}
            setFormData={setFormData}
            src={formData.uri.thumb}
            {...props}
          />
        </header>

        <div className={css.body}>
          <TypeInput
            label="project"
            type="select"
            value={formData.title}
            onChange={e => handleChange(e, 'title')}
          />
          <TypeInput
            label="alt"
            type="textarea"
            value={formData.alt}
            onChange={e => handleChange(e, 'alt')}
          />
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

        <footer className={css.footer}>
          <Button
            text={props.activeId ? 'Update' : 'create new'}
            onClick={e => handleSubmit(e)}
          />

          <Button text={'clear'} onClick={() => clear()} />
        </footer>
      </Form>
    </Fixed>
  );
};
