import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initContr } from 'config/initData';
import { List, ListHeader, Item, initForm, Fixed } from 'page-components/media';
import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { Button, Flex, Cimage, Loading } from 'components';
import { Form, Input, Textarea } from 'components';

import * as api from 'api-lib/dispatch/media';

import {
  GET_MEDIA,
  CREATE_MEDIA,
  PATCH_MEDIA,
  DELETE_MEDIA,
  TOAST,
} from 'actions';

export default function Media({ ...props }) {
  const [controller, setController] = useState({ ...initContr });
  const [formData, setFormData] = useState({ ...initForm });
  const [activeId, setActiveId] = useState('');

  const dispatch = useDispatch();

  const store = useSelector(s => s.media);
  const activePost = useSelector(s => s.media.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  async function postOne(formData) {
    try {
      const data = await api.postOne(formData);
      dispatch({ type: CREATE_MEDIA, payload: data });
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
      dispatch({ type: DELETE_MEDIA, payload: data._id });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post deleted!' },
      });
    } catch (error) {
      console.log('cow');
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
      dispatch({ type: PATCH_MEDIA, payload: data });
      clear();
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post updated!' },
      });
    } catch (error) {
      console.log('cow');
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Update attempt failed, please try again.',
        },
      });
    }
  }

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
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
    setFormData({ ...initForm });
    setActiveId('');
  }
  async function clearIdAndFormdata() {
    setActiveId('');
    setFormData({ ...initForm });
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
  async function selectProject(id) {
    if (controller.isCreating) {
      setController({ ...controller, isCreating: false });
      setActiveId(id);
    } else if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  }

  props = {
    controller,
    setController,
  };

  return (
    <>
      <BacksideView hasMenu={true}>
        <Menu title="Media Database">
          <Controllers delete={true} create={true} {...props} />
        </Menu>

        <Fixed toggle={controller.isCreating || activeId ? true : false}>
          <Form
            title={activeId ? `Editing: ${activeId}` : 'creating new'}
            onSubmit={e => e.preventDefault()}
          >
            <header>
              <div>
                <Input
                  label="title"
                  value={formData.title}
                  onChange={e => handleChange(e, 'title')}
                />
              </div>
              <div>
                <Cimage />
              </div>
            </header>

            <Textarea
              label="alt"
              value={formData.alt}
              onChange={e => handleChange(e, 'alt')}
            />

            <div>
              <div>
                <Input
                  label="drawingType"
                  value={formData.drawingType}
                  onChange={e => handleChange(e, 'drawingType')}
                />
                <Input
                  label="url"
                  value={formData.url}
                  onChange={e => handleChange(e, 'url')}
                />
              </div>
            </div>

            <Flex>
              <Button
                padding="1rem"
                text={activeId ? 'Update' : 'create new'}
                onClick={e => handleSubmit(e)}
              />
              <Button padding="1rem" text={'clear'} onClick={e => clear(e)} />
            </Flex>
          </Form>
        </Fixed>

        <List>
          <ListHeader>
            <Button width="2rem" padding="0" />
            <Button
              width="9rem"
              margin="0 1rem"
              padding="0.25rem 0"
              text="title"
            />
            <Button
              width="9rem"
              margin="0 1rem"
              padding="0.25rem 0"
              text={`category`}
            />
            <Button
              width="9rem"
              margin="0 1rem"
              padding="0.25rem 0"
              text={`project`}
            />
            <Button
              width="9rem"
              margin="0 1rem"
              padding="0.25rem 0"
              text={`Creation date :`}
            />
          </ListHeader>

          {store.length ? (
            store.map((p, i) => (
              <Item
                className={`${i % 2 ? 'pc05bg' : ''}${
                  activeId === p._id ? ` sc sc1bg` : ''
                }`}
                key={p._id}
                data={p}
                onClick={
                  !controller.isDeleting
                    ? () => selectProject(p._id)
                    : console.log('Toggle deleting to set id')
                }
                onDelete={() => deleteOne(p._id)}
                {...props}
              />
            ))
          ) : (
            <Flex>
              <Loading />
              <h4>Fetching data...</h4>
            </Flex>
          )}
        </List>
      </BacksideView>
    </>
  );
}
