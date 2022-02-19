import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, List, FixedForm, MenuButtons } from 'page-components/media';
import { BacksideView, Menu, Controllers } from 'components/BacksideView';

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
            <MenuButtons {...props} />
          </span>

          <Controllers delete={true} create={true} {...props} />
        </Menu>

        <FixedForm {...props} />

        <List.Map mapData={store} {...props} />
      </BacksideView>
    </>
  );
}
