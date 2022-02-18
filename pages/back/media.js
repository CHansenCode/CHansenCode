import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, List, FixedForm } from 'page-components/media';
import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { Button, Flex, Cimage, Loading } from 'components';

import * as api from 'api-lib/dispatch/media';

export default function Media({ ...props }) {
  const [controller, setController] = useState({ ...init.contr });
  const [formData, setFormData] = useState({ ...init.form });
  const [activeId, setActiveId] = useState('');

  const dispatch = useDispatch();

  const store = useSelector(s => s.media);
  const activePost = useSelector(s => s.media.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...init.form });
    setActiveId('');
  }
  async function clearIdAndFormdata() {
    setActiveId('');
    setFormData({ ...init.form });
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
    formData,
    setFormData,
    activeId,
    setActiveId,
  };

  return (
    <>
      <BacksideView hasMenu={true}>
        <Menu title="Media Database">
          <span>
            <Button
              text="view"
              onClick={() =>
                setController({
                  ...controller,
                  listView: (controller.listView = 'thumb' ? 'list' : 'thumb'),
                })
              }
            />
          </span>

          <Controllers delete={true} create={true} {...props} />
        </Menu>

        <FixedForm {...props} />

        {/* <Fixed toggle={controller.isCreating || activeId ? true : false}>
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
        </Fixed> */}

        <List.Map mapData={store} {...props} />
      </BacksideView>
    </>
  );
}
