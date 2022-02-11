import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, SectionMenu, Button, TypeInput } from 'components';
import { useDebouncedCallback } from 'lib';

//  page-specific
import { List, Item, CreateNew } from 'page-components/slides';
import { Presentation, Slide } from 'page-components/slides';
import {
  initForm,
  initController,
  initTitle,
  newSlide,
} from 'page-components/slides';

//  config
import * as api from 'api-axios/slides';
import { GET_SLIDES, CREATE_SLIDE, PATCH_SLIDE, DELETE_SLIDE } from 'actions';
import { TOAST } from 'actions';

export default function PlanningApp() {
  const dispatch = useDispatch();
  //

  //#region STATES
  const [controller, setController] = useState({ ...initController });
  const [formData, setFormData] = useState({ ...initForm });
  const [titleData, setTitleData] = useState({ ...initTitle });
  const [valid, setValid] = useState({ title: false });
  const [activeId, setActiveId] = useState('');
  const [activeSlide, setActiveSlide] = useState('');
  //#endregion

  //#region LIVE VALIDATOR
  useEffect(() => {
    if (titleData.length < 2) {
      setValid({ ...valid, title: false });
    } else {
      setValid({ ...valid, title: true });
    }
  }, [titleData]);
  //#endregion

  //#region DATA LISTENERS
  const storeData = useSelector(s => s.slides);
  const activePost = useSelector(s =>
    s.slides.find((o, i) => o._id === activeId),
  );
  useEffect(() => getAll(), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);
  //#endregion

  //#region CRUD
  async function getAll() {
    try {
      const data = await api.getAll();
      dispatch({ type: GET_SLIDES, payload: data });
    } catch (error) {
      console.log('Error in "pages/media" dispatching data => ', error);
    }
  }
  async function postOne(formData) {
    try {
      const data = await api.PostOne(formData);
      dispatch({ type: CREATE_SLIDE, payload: data });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post created!' },
      });

      console.log(data);
    } catch (error) {
      console.log('ErrorIn: pages/media, action: postMedia', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Post attempt failed, please try again.',
        },
      });
    }
  }
  async function deleteOne(id) {
    try {
      const data = await api.deleteOne(id);
      dispatch({ type: DELETE_SLIDE, payload: data._id });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post deleted!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: deleteOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Delete attempt failed, please try again.',
        },
      });
    }
  }
  async function patchOne(id, formData) {
    try {
      const data = await api.patchOne(id, formData);
      dispatch({ type: PATCH_SLIDE, payload: data });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post updated!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: patchOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Update attempt failed, please try again.',
        },
      });
    }
  }
  //#endregion

  //#region CONTROLLER funcs
  async function enableDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function enableEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function toggleCreating() {
    setController({ ...controller, isCreating: !controller.isCreating });
  }
  //#endregion

  //#region  FORM HANDLING
  async function createPresentation(initForm, title) {
    let data = { ...initForm, title: title };
    postOne(data);
  }
  async function createSlide(initSlide, title) {
    let newSlide = { ...initSlide, title: title };
    // let newSlides = [...formData.slides, newSlide];

    console.log('slide', newSlide);

    // setFormData({ ...formData, slides: newSlides });
  }

  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initForm });
    setActiveId('');
  }
  //#endregion

  let props = {
    controller,
    setController,
    formData,
    setFormData,
  };

  return (
    <FullSection hasMenu="true" title="Slides App">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(activeId || controller.isCreating) && (
            <Button text="<" fontSize="1.25rem" onClick={clear} />
          )}

          <p>{activeId && activeId.substring(0, 8)}</p>
          <p>{activeSlide && activeSlide.substring(0, 8)}</p>
        </div>

        <div>
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={enableDeleting}
          />
          <Button
            text="EDIT"
            active={controller.isEditing}
            onClick={enableEditing}
          />
        </div>
      </SectionMenu>

      {activeId ? (
        formData && (
          <>
            {activeSlide ? (
              <Slide data={data} />
            ) : (
              <List data={formData}>
                {formData.slides.map((s, i) => (
                  <Item key={s.id || s._id} type="slide" data={s} />
                ))}

                <CreateNew
                  onClick={() => createSlide(newSlide, titleData)}
                  onClear={() =>
                    setTitleData({ ...titleData, slide: initTitle.slide })
                  }
                >
                  <TypeInput
                    label="Title of new slide"
                    value={titleData.slide}
                    onChange={e =>
                      setTitleData({ ...titleData, slide: e.target.value })
                    }
                  />
                </CreateNew>
              </List>
            )}
          </>
        )
      ) : (
        <List>
          {storeData.map((p, i) => (
            <Item
              key={p._id}
              type="presentation"
              data={p}
              onClick={() => setActiveId(p._id)}
            />
          ))}

          <CreateNew
            onClick={() => createPresentation(initFormData, titleData)}
            onClear={() =>
              setTitleData({
                ...titleData,
                presentation: initTitle.presentation,
              })
            }
          >
            <TypeInput
              label="Title of new presentation"
              value={titleData.presentation}
              onChange={e => setTitleData(e.target.value)}
            />
          </CreateNew>
        </List>
      )}
    </FullSection>
  );
}

//#region AUTOSAVE func.
//  update func
// async function updateProject(activeId, formData) {
//   patchOne(activeId, formData);
// }

// //  debounce handler
// const [debounceHandler] = useDebouncedCallback(
//   (activeId, formData) => updateProject(activeId, formData),
//   1000,
// );

// //  listener
// useEffect(() => {
//   controller.triggerDB > 0 && debounceHandler(activeId, formData);
// }, [controller.triggerDB]);
//#endregion
