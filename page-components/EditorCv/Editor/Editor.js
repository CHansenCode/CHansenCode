import { useDispatch } from 'react-redux';
import { Form, TypeInput, RichText, Button } from 'components';

import css from './Editor.module.scss';

import * as api from 'api-lib/dispatch/cv';

export function Editor({ formData, setFormData, ...props }) {
  const dispatch = useDispatch();

  async function handleChange(e, objKey, data, setData) {
    setData({ ...data, [objKey]: e.target.value });
  }
  async function handleBool(e, objKey, data, setData) {
    e.preventDefault();
    setFormData({ ...formData, [objKey]: !formData[objKey] });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    props.activeId
      ? dispatch(api.patchOne(props.activeId, formData))
      : dispatch(api.postOne(formData));
  }

  return (
    <Form className={css.form} onSubmit={e => e.preventDefault()}>
      <header className={css.header}>
        <TypeInput
          label="whom"
          value={formData.whom}
          onChange={e => handleChange(e, 'whom', formData, setFormData)}
        />
        <TypeInput
          label="company"
          value={formData.company}
          onChange={e => handleChange(e, 'company', formData, setFormData)}
        />
        <TypeInput
          label="urlParam"
          value={formData.urlParam}
          onChange={e => handleChange(e, 'urlParam', formData, setFormData)}
        />
        <TypeInput
          label="deadline"
          value={formData.deadline}
          onChange={e => handleChange(e, 'deadline', formData, setFormData)}
        />
        <TypeInput
          label="Name of handler"
          value={formData.nameOfHandler}
          onChange={e =>
            handleChange(e, 'nameOfHandler', formData, setFormData)
          }
        />
        <TypeInput
          label="Date of publishing"
          value={formData.publishedAt}
          onChange={e => handleChange(e, 'publishedAt', formData, setFormData)}
        />
        <Button
          text={formData.published ? 'PUBLISHED' : 'UNPUBLISHED'}
          onClick={e => handleBool(e, 'published', formData, setFormData)}
          className={formData.published ? 'success' : 'alert'}
          style={{
            boxShadow:
              'inset 0 0 4rem -2rem currentColor, 0 0 4rem -3rem currentColor',
          }}
        />
      </header>

      <div>
        <RichText
          title="Paragraph 1"
          value={formData.richTextOne}
          activeId={props.activeId}
          formData={formData}
          setFormData={setFormData}
          objKey="richTextOne"
        />
        <RichText
          title="Paragraph 2"
          value={formData.richTextTwo}
          activeId={props.activeId}
          formData={formData}
          setFormData={setFormData}
          objKey="richTextTwo"
        />
        <RichText
          title="Paragraph 3"
          value={formData.richTextThree}
          activeId={props.activeId}
          formData={formData}
          setFormData={setFormData}
          objKey="richTextThree"
        />
        <RichText
          title="Paragraph 4"
          value={formData.richTextFour}
          activeId={props.activeId}
          formData={formData}
          setFormData={setFormData}
          objKey="richTextFour"
        />
      </div>

      <footer>
        <Button
          text={props.activeId ? 'UPDATE' : 'CREATE NEW'}
          onClick={e => handleSubmit(e)}
        />
      </footer>
    </Form>
  );
}
