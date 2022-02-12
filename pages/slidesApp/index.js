import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, SectionMenu, Button, TypeInput } from 'components';
import { useDebouncedCallback } from 'lib';

import { uniqueIdGenerator } from 'lib';

//  page-specific
import { List, Item, CreateNew, GoBack } from 'page-components/slides';
import { SlideMenu, Slide } from 'page-components/slides';
import { PresentationMenu } from 'page-components/slides';
import { initForm, initContr, initTitle } from 'page-components/slides';
import { initSlide } from 'page-components/slides';

import * as api from 'api/slides';

export default function PlanningApp() {
  const dispatch = useDispatch();
  //

  //#region STATES
  const [controller, setController] = useState({ ...initContr });
  const [formData, setFormData] = useState({ ...initForm });
  const [titleData, setTitleData] = useState({ ...initTitle });
  const [activeId, setActiveId] = useState('');
  const [slideIndex, setSlideIndex] = useState(null);
  //#endregion

  //#region DATA LISTENERS
  const storeData = useSelector(s => s.slides);
  const activePost = useSelector(s =>
    s.slides.find((o, i) => o._id === activeId),
  );
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);
  //#endregion

  //#region AUTOSAVE
  async function triggerPatch() {
    setController({ ...controller, triggerDB: controller.triggerDB + 1 });
  }
  useEffect(() => {
    controller.triggerDB > 0 && debounceHandler(activeId, formData);
  }, [controller.triggerDB]);
  const [debounceHandler] = useDebouncedCallback(
    (activeId, formData) => updateProject(activeId, formData),
    1000,
  );
  async function updateProject(activeId, formData) {
    dispatch(api.patchOne(activeId, formData));
  }
  //#endregion

  //#region  FORM HANDLING
  async function createPresentation(initForm, title) {
    let data = await { ...initForm, title: title };
    dispatch(api.postOne(data));
  }
  async function createSlide(initSlide, title) {
    let data = { ...formData };
    let newSlide = { ...initSlide, title: title, id: uniqueIdGenerator() };
    let newSlides = [...data.slides, newSlide];

    data.slides = newSlides;
    dispatch(api.patchOne(activeId, data));
  }
  async function deleteSlide(formData, slideId, activeId) {
    let data = await { ...formData, slides: [...formData.slides] };
    let newSlides = await data.slides.filter((s, i) => !(s.id === slideId));

    data.slides = newSlides;

    dispatch(api.patchOne(activeId, data));
  }
  //#endregion

  let props = {
    controller,
    setController,
    formData,
    setFormData,
    activeId,
    setActiveId,
    titleData,
    setTitleData,
    slideIndex,
    setSlideIndex,
    triggerPatch,
  };

  return (
    <FullSection hasMenu="true" title="Slides App">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {activeId && <GoBack {...props} />}

          {activeId && slideIndex === null && <PresentationMenu {...props} />}
          {slideIndex !== null && <SlideMenu {...props} />}
        </div>

        <div>
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={() =>
              setController({
                ...controller,
                isDeleting: !controller.isDeleting,
              })
            }
          />
          <Button
            text="EDIT"
            active={controller.isEditing}
            onClick={() =>
              setController({ ...controller, isEditing: !controller.isEditing })
            }
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
                    index={i + 1}
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
                    createSlide(initSlide, titleData.slide);
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
              onDelete={() => dispatch(api.deleteOne(p._id))}
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
