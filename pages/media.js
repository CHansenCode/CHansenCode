import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Item, initForm } from 'page-components/media';
import { FullSection, Button, Flex, SectionMenu } from 'components';
import { Form, Input, Textarea, Select } from 'components';

import * as api from 'apiCalls';
import { GET_MEDIA, CREATE_MEDIA, PATCH_MEDIA, DELETE_MEDIA } from 'actions';

export default function MediaDb({ ...props }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ ...initForm });
  const [activeId, setActiveId] = useState('');
  const [controller, setController] = useState({
    isCreating: false,
    isDeleting: false,
    isEditing: false,
  });

  //#region   Controller
  async function enableDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function enableEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function toggleCreating() {
    setController({ ...controller, isCreating: !controller.isCreating });
  }
  //#endregion

  //#region Listeners
  useEffect(() => {
    getMedia();
  }, [dispatch]);
  const storeData = useSelector(s => s.media);
  const activePost = useSelector(s =>
    s.media.find((o, i) => o._id === activeId),
  );
  useEffect(() => {
    activePost && setFormData({ ...activePost });
  }, [activePost]);
  //#endregion

  //#region   CRUD
  async function getMedia() {
    try {
      const data = await api.getMedia();

      dispatch({ type: GET_MEDIA, payload: data });
    } catch (error) {
      console.log('Error in "pages/media" dispatching data => ', error);
    }
  }
  async function postMedia() {
    try {
      const data = await api.postMedia(formData);

      dispatch({ type: CREATE_MEDIA, payload: data });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: postMedia', error);
    }
  }
  async function deleteMedia(id) {
    const data = await api.deleteMedia(id);

    dispatch({ type: DELETE_MEDIA, payload: data._id });
  }
  async function patchMedia() {
    const data = await api.patchMedia(activeId, formData);

    dispatch({ type: PATCH_MEDIA, payload: data });
  }
  //#endregion

  //#region   Form handling
  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (activeId) {
      patchMedia();
    } else {
      postMedia();
    }
  }
  async function clear(e) {
    e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initForm });
    setActiveId('');
  }
  //#endregion

  //#region   local var's
  let title = activeId ? `Editing: ${activeId}` : 'creating new';
  let submitText = activeId ? 'Update' : 'Create new';

  let editActive = controller.isEditing;
  let deleteActive = controller.isDeleting;
  let creatingActive = controller.isCreating;
  //#endregion

  props = {
    ...props,
    controller,
    setController,
  };

  return (
    <>
      <FullSection hasMenu="true" title="Media Database editor">
        <SectionMenu>
          <div>
            <Button
              text="NEW"
              active={creatingActive}
              onClick={toggleCreating}
            />
          </div>
          <div>
            <Button text="DEL" active={deleteActive} onClick={enableDeleting} />
            <Button text="EDIT" active={editActive} onClick={enableEditing} />
          </div>
        </SectionMenu>

        <div className="fixed_form">
          <Form title={title} onSubmit={e => e.preventDefault()}>
            <Input
              label="title"
              value={formData.title}
              onChange={e => handleChange(e, 'title')}
            />
            <Input
              label="project"
              value={formData.project}
              onChange={e => handleChange(e, 'project')}
            />
            <Input
              label="category"
              value={formData.category}
              onChange={e => handleChange(e, 'category')}
            />

            <Select
              label="category"
              value={formData.category}
              options={['cow', 'fox', 'cat']}
              objKey={'category'}
              data={formData}
              setData={setFormData}
            />

            <Flex>
              <Button
                padding="1rem"
                text={submitText}
                onClick={e => handleSubmit(e)}
              />
              <Button padding="1rem" text={'clear'} onClick={e => clear(e)} />
            </Flex>
          </Form>
        </div>

        <List>
          {storeData &&
            storeData.map((p, i) => (
              <Item
                className={i % 2 ? 'pc05bg' : ''}
                key={p._id}
                data={p}
                onClick={
                  !controller.isDeleting
                    ? () => setActiveId(p._id)
                    : console.log('Toggle deleting to set id')
                }
                onDelete={() => deleteMedia(p._id)}
                {...props}
              />
            ))}
        </List>
      </FullSection>

      <style jsx>
        {`
          .fixed_form {
            position: fixed;
            top: 0;
            right: ${controller.isCreating || activeId ? '0' : '-50vw'};
            height: 100vh;
            width: 50vw;

            transition: 0.3s ease;
          }
        `}
      </style>
    </>
  );
}
