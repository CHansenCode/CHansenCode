import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Form, TypeInput, Button } from 'components';
import { init } from '..';
import { Fixed } from './Fixed';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';
import { populateModal } from 'api-lib/dispatch/imgModal';

export const FixedForm = ({ formData, setFormData, ...props }) => {
  const [fileInput, setFileInput] = useState('');
  const [fileInputKey, setFileInputKey] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => setFileInputKey(fileInputKey + 1), [formData.file]);

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleFileChange(e) {
    if (!e.target.files.length > 0) {
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileInput(reader.result);
      setFormData({ ...formData, file: reader.result });
    };
  }
  async function clearImage() {
    setFormData({ ...formData, file: init.form.file });
    setFileInput('');
  }
  async function clear() {
    setFormData({ ...init.form });
    setFileInput('');
    props.setActiveId('');
    props.setController({
      ...props.controller,
      isCreating: true,
      isEditing: false,
      isDelting: false,
    });
  }
  async function clearAndClose() {
    setFormData({ ...init.form });
    setFileInput('');
    props.setActiveId('');
    props.setController({
      ...props.controller,
      isCreating: false,
      isEditing: false,
      isDelting: false,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    let success = false;

    if (props.activeId) {
      try {
        dispatch(api.patchOne(props.activeId, formData));
        success = true;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(api.postOne(formData));
        success = true;
      } catch (error) {
        console.log(error);
      }
    }

    success && clearAndClose();
  }

  return (
    <Fixed {...props}>
      <Form onSubmit={e => e.preventDefault()}>
        <HeaderStyle {...props} formData={formData}>
          <div>
            <TypeInput
              label="title"
              required={true}
              info="3-32 characters"
              value={formData.title}
              onChange={e => handleChange(e, 'title')}
            />
            <div>
              {fileInput.length
                ? `${(fileInput.length / 1024).toFixed()} kb`
                : ''}
            </div>

            <Button
              disabled={props.activeId}
              padding="0.25rem 0.75rem"
              text="Reset Image"
              onClick={clearImage}
            />
          </div>

          <aside>
            <TypeInput
              type="file"
              style={{ height: '100%' }}
              src={formData.file ? formData.file : formData.secure_url}
              onChange={e => handleFileChange(e)}
            />

            <p className="alert">
              {props.activeId &&
                formData.file &&
                'Database changes wont take effect before updating down below'}
            </p>
          </aside>
        </HeaderStyle>

        <div className={css.body}>
          <TypeInput
            type="select"
            label="category"
            uniqueKey="cagegory"
            options={['architecture', 'webdesign', 'digital graphics', 'other']}
            value={formData.category}
            onChange={e => handleChange(e, 'category')}
          />
          <TypeInput
            type="select"
            label="project"
            uniqueKey="project"
            options={['kitchen', 'svanen', 'vikingen', 'cv', 'ishallen']}
            value={formData.project}
            onChange={e => handleChange(e, 'project')}
          />
          <TypeInput
            type="textarea"
            label="alt"
            value={formData.alt}
            onChange={e => handleChange(e, 'alt')}
          />
        </div>

        <footer className={css.footer}>
          <span className="success-bg1">
            <Button
              text={props.activeId ? 'Update' : 'Create new'}
              onClick={e => handleSubmit(e)}
            />
          </span>

          <Button
            className="warning-bg1"
            text={'Clear'}
            onClick={() => clear()}
          />
          <Button
            className="alert-bg1"
            text={'Clear & Close'}
            onClick={() => clearAndClose()}
          />
        </footer>
      </Form>
    </Fixed>
  );
};

const HeaderStyle = ({ children, ...props }) => {
  return (
    <header className={css.header}>
      <div className={css.header_left}>
        <div style={{ display: 'flex' }}>
          {props.activeId ? (
            <>
              <p className="sc">Editing:</p>
              <h4 style={{ marginLeft: '1rem' }}>{props.formData.title}</h4>
            </>
          ) : (
            <>
              <h4 className="sc">Creating new</h4>
            </>
          )}
        </div>

        {children[0]}
      </div>

      <div className={css.header_right}>{children[1]}</div>
    </header>
  );
};
