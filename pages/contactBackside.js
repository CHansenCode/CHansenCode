import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initContr } from 'config/initData';
import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { Card } from 'page-components/contact';

import { GET_CONTACT, DELETE_CONTACT, TOAST } from 'actions';

import * as api from 'api-axios/contact';

export default function ContactBackside() {
  const [controller, setController] = useState({ ...initContr });

  const dispatch = useDispatch();

  useEffect(() => getAll(), [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
  const storeData = useSelector(s => s.contact);

  async function getAll() {
    try {
      const data = await api.getAll();
      dispatch({ type: GET_CONTACT, payload: data });
    } catch (error) {
      console.log('Error in "pages/media" dispatching data => ', error);
    }
  }
  async function deleteOne(id) {
    try {
      const data = await api.deleteOne(id);
      console.log(data);
      dispatch({ type: DELETE_CONTACT, payload: data._id });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post deleted!' },
      });
    } catch (error) {
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Delete attempt failed, please try again.',
        },
      });
    }
  }

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
        {storeData.map((p, i) => (
          <Card
            key={p._id}
            data={p}
            controller={controller}
            onDelete={() => deleteOne(p._id)}
          />
        ))}
      </List>
    </BacksideView>
  );
}

const List = ({ children }) => {
  return (
    <>
      <div className="contact_list">{children}</div>

      <style jsx>
        {`
          .contact_list {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};
