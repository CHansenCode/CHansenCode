import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initContr, initForm } from 'page-components/EditorCv';

import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import {
  Editor,
  List,
  Item,
  GalleryConstructor,
} from 'page-components/EditorCv';
import { ButtonType } from 'components';

import * as api from 'api-lib/dispatch/cv';

export default function EditorCv() {
  const [controller, setController] = useState({ ...initContr });
  const [formData, setFormData] = useState({ ...initForm });
  const [activeId, setActiveId] = useState('');

  const dispatch = useDispatch();

  const store = useSelector(s => s.cv);
  const activePost = useSelector(s => s.cv.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  let props = {
    controller,
    setController,
    formData,
    setFormData,
    activeId,
    setActiveId,
  };

  async function setAllToDefault(e) {
    e && e.preventDefault();
    setController({ ...initContr });
    setFormData({ ...initForm });
    setActiveId('');
  }
  async function clearIdAndFormdata() {
    setActiveId('');
    setFormData({ ...initForm });
  }

  return (
    <BacksideView hasMenu={true} title="CV Editor">
      <Menu title="CV Editor">
        <span>
          {(activeId || controller.isCreating) && (
            <ButtonType type="back" onClick={() => setAllToDefault()} />
          )}
        </span>

        <Controllers delete={true} create={true} {...props} />
      </Menu>

      {activeId || controller.isCreating ? (
        <Editor {...props} />
      ) : (
        <List>
          {store.length
            ? store.map((p, i) => (
                <Item
                  key={`cv_project${i}`}
                  i={i}
                  data={p}
                  onClick={() => setActiveId(p._id)}
                  onDelete={() => dispatch(api.deleteOne(p._id))}
                  controller={controller}
                />
              ))
            : 'loading...'}
        </List>
      )}

      <GalleryConstructor />
    </BacksideView>
  );
}
