import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, List, FixedForm, Menu } from 'page-components/EditMedia';
import { BacksideView, TopBar } from 'components/BacksideView';

import * as api from 'api-lib/dispatch/media';

export default function Media() {
  const [controller, setController] = useState({ ...init.contr });
  const [formData, setFormData] = useState({ ...init.form });
  const [activeId, setActiveId] = useState('');

  const dispatch = useDispatch();

  const store = useSelector(s => s.media);
  const activePost = useSelector(s => s.media.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  useEffect(() => initFetch(), []);

  async function initFetch() {
    try {
      dispatch(api.getAll());
    } catch (error) {
      console.log(error);
    } finally {
      setController({ ...controller, initFetch: true });
    }
  }

  let props = {
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
        <TopBar title="Media Database" delete={true} {...props}>
          <Menu {...props} />
        </TopBar>

        <FixedForm {...props} />

        {controller.initFetch ? (
          <List.Map mapData={store} {...props} />
        ) : (
          <>Connecting to database</>
        )}
      </BacksideView>
    </>
  );
}
