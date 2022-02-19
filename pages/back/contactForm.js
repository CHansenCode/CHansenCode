import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { init, List, Item } from 'page-components/EditorContacts';

import * as api from 'api-lib/dispatch/contact';

export default function ContactForm() {
  const [controller, setController] = useState({ ...init.contr });

  const dispatch = useDispatch();

  useEffect(() => dispatch(api.getAll()), [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
  const store = useSelector(s => s.contactForm);

  let props = {
    controller,
    setController,
  };

  return (
    <BacksideView hasMenu={true}>
      <Menu title="Contact form">
        <span></span>

        <Controllers delete={true} {...props} />
      </Menu>

      <List>
        {store.map((p, i) => (
          <Item
            key={p._id}
            data={p}
            controller={controller}
            onDelete={() => dispatch(api.deleteOne(p._id))}
          />
        ))}
      </List>
    </BacksideView>
  );
}
