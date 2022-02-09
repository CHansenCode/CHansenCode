import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, Button, SectionMenu, Loading, Empty } from 'components';
import { Card } from 'page-components/contact';

import { GET_CONTACT, DELETE_CONTACT, TOAST } from 'actions';

import * as api from 'api-axios/contact';

export default function ContactBackside() {
  const dispatch = useDispatch();

  const [controller, setController] = useState({
    isCreating: false,
    isDeleting: false,
    isEditing: false,
  });

  useEffect(() => {
    getAll();
  }, [dispatch]);
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
  async function toggleDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }

  return (
    <FullSection hasMenu={true} title="Contact form">
      <SectionMenu>
        <div></div>

        <div>
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={toggleDeleting}
          />
        </div>
      </SectionMenu>

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
    </FullSection>
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
