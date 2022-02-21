import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button, Flex, Cimage } from 'components';
import { init } from '../';

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
  async function handleFileChange(event) {
    try {
      const file = event.target.files[0];
      const uri = {
        web: await compress.web(file),
        mobile: await compress.mobile(file),
        thumb: await compress.thumb(file),
        icon: await compress.icon(file),
      };
      setFormData({ ...formData, uri: uri });
    } catch (error) {
      console.log(error);
    }
  }

  let open = props.activeId || props.controller.isCreating ? true : false;

  return (
    <div className={`${css.fixed}${open ? ` ${css.fixed_open}` : ''}`}>
      <div className={css.inner}>
        <Form onSubmit={e => e.preventDefault()}>
          <header className={css.header}>
            <div className={`${css.title}`}>
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

            <div className={css.img_input}>
              <input type="file" onChange={e => handleFileChange(e)} />

              {formData.uri.thumb ? (
                <Cimage src={formData.uri.thumb} objectFit="contain" />
              ) : (
                <h5>{`click here to add an image`}</h5>
              )}
            </div>
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
            <Flex gap="1.5rem" justifyContent="space-between">
              <Button
                padding="1rem 2rem"
                text={props.activeId ? 'Update' : 'create new'}
                onClick={e => handleSubmit(e)}
              />

              <Button
                padding="1rem 2rem"
                text={'clear'}
                onClick={() => clear()}
              />
            </Flex>
          </footer>
        </Form>
      </div>
    </div>
  );
};
