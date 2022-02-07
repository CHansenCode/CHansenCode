import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, Button, SectionMenu, Loading, Empty } from 'components';
import { Card } from 'page-components/contact';

import { useRouter } from 'next/router';

import { GET_CONTACT, DELETE_CONTACT } from 'actions';

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
      dispatch({ type: DELETE_CONTACT, payload: data._id });
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

  async function toggleDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function toggleEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function toggleCreating() {
    setController({ ...controller, isCreating: !controller.isCreating });
  }

  return (
    <FullSection hasMenu={true} title="Contact form">
      <SectionMenu>
        <div>
          <Button
            text="NEW"
            active={controller.isCreating}
            onClick={toggleCreating}
          />
        </div>

        <div>
          <Button
            text="EDIT"
            active={controller.isEditing}
            onClick={toggleEditing}
          />
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={toggleDeleting}
          />
        </div>
      </SectionMenu>

      <div>
        {storeData.map((p, i) => (
          <Card key={p._id} data={p} onDelete={() => deleteOne(p._id)} />
        ))}
      </div>
    </FullSection>
  );
}
