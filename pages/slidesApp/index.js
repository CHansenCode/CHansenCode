import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, SectionMenu, Button, TypeInput } from 'components';
import { useDebouncedCallback } from 'lib';

import { uniqueIdGenerator } from 'lib';

//  page-specific
import { List, Item, CreateNew } from 'page-components/slides';
import { SlideMenu, Slide } from 'page-components/slides';
import { Presentation, PresentationMenu } from 'page-components/slides';
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
  const [slideIndex, setSlideIndex] = useState(null);
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
    console.log('patch');
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
    let data = { ...formData };
    let newSlide = { ...initSlide, title: title, id: uniqueIdGenerator() };
    let newSlides = [...data.slides, newSlide];

    data.slides = newSlides;

    patchOne(activeId, data);
  }
  async function deleteSlide(formData, slideId, activeId) {
    let data = await { ...formData, slides: [...formData.slides] };
    let newSlides = await data.slides.filter((s, i) => !(s.id === slideId));

    data.slides = newSlides;

    patchOne(activeId, data);
  }
  async function deletePresentation(id) {
    deleteOne(id);
  }
  async function goBack() {
    if (slideIndex === null) {
      setActiveId('');
    } else {
      setSlideIndex(null);
    }
  }
  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initForm });
    setActiveId('');
  }
  async function toggleObjectFit(formData, slideIndex) {
    console.log(formData.slides[slideIndex]);
  }
  //#endregion

  //#region AUTOSAVE

  //  call function & listener
  async function debouncedDbUpdate() {
    console.log('triggered controller');
    setController({ ...controller, triggerDB: controller.triggerDB + 1 });
  }
  useEffect(() => {
    controller.triggerDB > 0 && debounceHandler(activeId, formData);
  }, [controller.triggerDB]);
  //  debounce
  const [debounceHandler] = useDebouncedCallback(
    (activeId, formData) => updateProject(activeId, formData),
    1000,
  );
  //  execute func
  async function updateProject(activeId, formData) {
    patchOne(activeId, formData);
  }

  //#endregion

  let props = {
    controller,
    setController,
    formData,
    setFormData,
    slideIndex,
    setSlideIndex,
  };

  return (
    <FullSection hasMenu="true" title="Slides App">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(activeId || controller.isCreating) && (
            <Button text="<" fontSize="1.25rem" onClick={goBack} />
          )}

          {activeId && slideIndex === null && <PresentationMenu {...props} />}
          {slideIndex !== null && <SlideMenu {...props} />}
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
            {slideIndex !== null ? (
              <Slide data={formData.slides[slideIndex]} {...props} />
            ) : (
              <List data={formData}>
                {formData.slides.map((s, i) => (
                  <Item
                    key={s.id || s._id}
                    pageIndex={i + 1}
                    type="slide"
                    data={s}
                    onClick={() => setSlideIndex(i)}
                    onDelete={() => deleteSlide(formData, s.id, activeId)}
                    {...props}
                  />
                ))}

                <CreateNew
                  value={titleData.slide}
                  onChange={e =>
                    setTitleData({ ...titleData, slide: e.target.value })
                  }
                  onClick={() => {
                    createSlide(newSlide, titleData.slide);
                    setTitleData({ ...initTitle });
                  }}
                  onClear={() => setTitleData({ ...initTitle })}
                />
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
              onDelete={() => deleteOne(p._id)}
              {...props}
            />
          ))}

          <CreateNew
            value={titleData.presentation}
            onChange={e =>
              setTitleData({ ...titleData, presentation: e.target.value })
            }
            onClick={() => {
              createPresentation(initForm, titleData.presentation);
              setTitleData({ ...initTitle });
            }}
            onClear={() => setTitleData({ ...initTitle })}
          />
        </List>
      )}
    </FullSection>
  );
}
