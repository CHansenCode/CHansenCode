import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initContr } from 'config/initData';

import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { ButtonType } from 'components';

import * as api from 'api-lib/dispatch/cv';

export default function EditorCv({ ...props }) {
  const [controller, setController] = useState({ ...initContr });

  const dispatch = useDispatch();

  const store = useSelector(state => state.cv);

  useEffect(() => {
    dispatch(api.getAll());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  props = {
    controller,
    setController,
  };

  return (
    <BacksideView hasMenu={true} title="CV Editor">
      <Menu title="CV Editor">
        <span>
          <ButtonType type="back" onClick={() => alert('nope')} />
        </span>

        <Controllers delete={true} edit={true} create={true} {...props} />
      </Menu>

      <h4>cow</h4>
    </BacksideView>
  );
}
