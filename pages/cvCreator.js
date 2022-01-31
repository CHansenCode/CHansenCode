import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initForm, initContr } from 'page-components/cv';
import { FullSection, SectionMenu, Button, ObjectViewer } from 'components';
import { Form, Input, Select, RichText } from 'components';

import * as api from 'apiCalls';
import { GET_CV, CREATE_CV, PATCH_CV, DELETE_CV } from 'actions';

export default function Occupation({ ...props }) {
  const dispatch = useDispatch();
  //
  const [controller, setController] = useState({ ...initContr });
  const [formData, setFormData] = useState({ ...initForm });
  const [activeId, setActiveId] = useState('');

  const store = useSelector(state => state.occupation);

  //#region   Controller
  async function enableDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function enableEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
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
  //#endregion

  //#region   Data fetcher listener
  useEffect(() => {
    getData();
  }, [dispatch]);
  const storeData = useSelector(s => s.media);
  const activePost = useSelector(s =>
    s.media.find((o, i) => o._id === activeId),
  );
  useEffect(() => {
    activePost && setFormData({ ...activePost });
  }, [activePost]);
  //#endregion

  //#region   CRUD
  async function getData() {
    try {
      const data = await api.getMedia();

      dispatch({ type: GET_CV, payload: data });
    } catch (error) {
      console.log('Error in "pages/cvCreator" dispatching data => ', error);
    }
  }
  async function postData() {
    try {
      const data = await api.postMedia(formData);

      dispatch({ type: CREATE_CV, payload: data });
    } catch (error) {
      console.log('ErrorIn: pages/cvCreator, action: postMedia', error);
    }
  }
  async function deleteData(id) {
    const data = await api.deleteMedia(id);

    dispatch({ type: DELETE_CV, payload: data._id });
  }
  async function patchData() {
    const data = await api.patchMedia(activeId, formData);

    dispatch({ type: PATCH_CV, payload: data });
  }
  //#endregion

  //#region FORM
  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (activeId) {
      patchData();
    } else {
      postData();
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
  //#endregion

  props = {
    ...props,
    activeId,
    setActiveId,
    formData,
    setFormData,
  };

  return (
    <FullSection hasMenu="true" title="Cv creator">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            text="NEW"
            active={controller.isCreating}
            onClick={toggleCreating}
          />
        </div>

        <div>
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={enableDeleting}
          />
        </div>
      </SectionMenu>

      <div>
        <div>
          <Input placeholder="for whom..." />
        </div>

        <div>
          <RichText />
        </div>
      </div>
    </FullSection>
  );
}

const OccuCard = ({ data, onClick, onDelete }) => {
  return (
    <>
      <Button onClick={onDelete}>delete {data._id}</Button>
      <div className="occucard" onClick={onClick}>
        <p className="sc">{data._id}</p>
        <p>{data.category}</p>
        <p>{data.short}</p>
        <p>{data.employer}</p>
        <p>{data.title}</p>
        <p>{data.location}</p>
        <p>{data.country}</p>
        <p>{data.descr}</p>
        <p>{data.from}</p>
        <p>{data.to}</p>
      </div>

      <style jsx>
        {`
          .occucard {
            border: thin solid;
            padding: 1rem;
            margin: 0.5rem 10vw;

            background: transparent;
            transition: 0.2s ease;
          }

          .occucard:hover {
            cursor: pointer;
            background: rgba(100, 50, 50, 0.1);
          }
        `}
      </style>
    </>
  );
};
