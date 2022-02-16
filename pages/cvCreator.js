import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormStyle, initController, initFormData } from 'page-components/cv';
import { List, Item } from 'page-components/cv';
import { FullSection, SectionMenu, Button, ControllerMenu } from 'components';
import { Form, TypeInput, RichText } from 'components';

import * as api from 'api-axios/cv';
import { GET_CV, CREATE_CV, PATCH_CV, DELETE_CV, TOAST } from 'actions';

export default function CvCreator({ ...props }) {
  const dispatch = useDispatch();
  //
  const [controller, setController] = useState({ ...initController });
  const [formData, setFormData] = useState({ ...initFormData });
  const [activeId, setActiveId] = useState('');

  //#region   Controller
  async function enableDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function enableEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function toggleCreating() {
    if (activeId && !controller.isCreating) {
      clearIdAndFormdata();
      setController({ ...controller, isCreating: true });
    } else {
      clearIdAndFormdata();
      setController({ ...controller, isCreating: !controller.isCreating });
    }
  }
  //#endregion

  //#region   Data fetcher listener
  useEffect(() => {
    getAll();
  }, [dispatch]);
  const storeData = useSelector(s => s.cv);

  const activePost = useSelector(s => s.cv.find((o, i) => o._id === activeId));
  useEffect(() => {
    activePost && setFormData({ ...activePost });
  }, [activePost]);
  //#endregion

  //#region   CRUD & DISPATCH
  async function getAll() {
    try {
      const data = await api.getAll();
      dispatch({ type: GET_CV, payload: data });
    } catch (error) {
      console.log('Error in "pages/media" dispatching data => ', error);
    }
  }
  async function postOne(formData) {
    try {
      const data = await api.postOne(formData);
      dispatch({ type: CREATE_CV, payload: data });
      clear();
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post created!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: postMedia', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Post attempt failed, please try again.',
        },
      });
    }
  }
  async function deleteOne(id) {
    try {
      const data = await api.deleteOne(id);
      dispatch({ type: DELETE_CV, payload: data._id });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post deleted!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: deleteOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Delete attempt failed, please try again.',
        },
      });
    }
  }
  async function patchOne(id, formData) {
    try {
      const data = await api.patchOne(id, formData);
      dispatch({ type: PATCH_CV, payload: data });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post updated!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: patchOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Update attempt failed, please try again.',
        },
      });
    }
  }
  //#endregion

  //#region Form handling
  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleBooleanChange(e, objKey) {
    e.preventDefault();
    setFormData({ ...formData, [objKey]: !formData[objKey] });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (activeId) {
      patchOne(activeId, formData);
    } else {
      postOne(formData);
    }
  }
  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initFormData });
    setActiveId('');
  }
  async function clearIdAndFormdata() {
    setActiveId('');
    setFormData({ ...initFormData });
  }
  //#endregion

  return (
    <FullSection hasMenu="true" title="Cv creator">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            text="NEW"
            active={controller.isCreating}
            onClick={toggleCreating}
          />

          {(activeId || controller.isCreating) && (
            <Button onClick={e => clear(e)}>
              <h4>{`ᐊ`}</h4>
            </Button>
          )}
        </div>

        <ControllerMenu delete create edit {...props} />
      </SectionMenu>

      <div style={{ height: '100%' }}>
        {controller.isCreating || activeId ? (
          formData && (
            <Form>
              <FormStyle>
                <header>
                  <div>
                    <TypeInput
                      label="whom"
                      value={formData.whom}
                      onChange={e => handleChange(e, 'whom')}
                    />
                    <TypeInput
                      label="company"
                      value={formData.company}
                      onChange={e => handleChange(e, 'company')}
                    />
                    <TypeInput
                      label="urlParam"
                      value={formData.urlParam}
                      onChange={e => handleChange(e, 'urlParam')}
                    />
                  </div>

                  <div>
                    <TypeInput
                      label="deadline"
                      value={formData.deadline}
                      onChange={e => handleChange(e, 'deadline')}
                    />
                    <TypeInput
                      label="name of handler"
                      value={formData.nameOfHandler}
                      onChange={e => handleChange(e, 'nameOfHandler')}
                    />
                    <TypeInput
                      label="Date of publishing"
                      value={formData.publishedAt}
                      onChange={e => handleChange(e, 'publishedAt')}
                    />
                  </div>

                  <Button
                    text={formData.published ? 'PUBLISHED' : 'UNPUBLISHED'}
                    onClick={e => handleBooleanChange(e, 'published')}
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
                    activeId={activeId}
                    formData={formData}
                    setFormData={setFormData}
                    objKey="richTextOne"
                  />
                  <RichText
                    title="Paragraph 2"
                    value={formData.richTextTwo}
                    activeId={activeId}
                    formData={formData}
                    setFormData={setFormData}
                    objKey="richTextTwo"
                  />
                  <RichText
                    title="Paragraph 3"
                    value={formData.richTextThree}
                    activeId={activeId}
                    formData={formData}
                    setFormData={setFormData}
                    objKey="richTextThree"
                  />
                  <RichText
                    title="Paragraph 4"
                    value={formData.richTextFour}
                    activeId={activeId}
                    formData={formData}
                    setFormData={setFormData}
                    objKey="richTextFour"
                  />
                </div>

                <footer>
                  <Button
                    text={activeId ? 'UPDATE' : 'CREATE NEW'}
                    onClick={e => handleSubmit(e)}
                  />
                </footer>
              </FormStyle>
            </Form>
          )
        ) : (
          <List>
            {storeData.length
              ? storeData.map((p, i) => (
                  <Item
                    key={`cv_project${i}`}
                    i={i}
                    data={p}
                    onClick={() => setActiveId(p._id)}
                    onDelete={() => deleteOne(p._id)}
                    controller={controller}
                  />
                ))
              : 'loading...'}
          </List>
        )}
      </div>
    </FullSection>
  );
}

const Project = ({ data, ...props }) => {
  return (
    <>
      <div className="project_card_id pc5b" onClick={props.onClick}>
        <p>{data._id}</p>
      </div>
      <button onClick={props.onDelete}>x</button>

      <style jsx>
        {`
          .project_card_id {
            padding: 1rem;
            maxwidth: 20rem;

            margin: 0 0.5rem 0.5rem 0;

            transition: 0.3s ease;
          }
          .project_card_id:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
