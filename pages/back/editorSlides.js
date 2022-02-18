import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BacksideView, Menu, Controllers } from 'components/BacksideView';
import { BsLoading } from 'components';
import { useDebouncedCallback } from 'lib';

import { init, Prese, Slide } from 'page-components/EditorSlides';

import * as api from 'api-lib/dispatch/slides';

// const useAutosave = (trigger, saveFnc) => {
//   useEffect(() => {
//     trigger > 0 && debounceHandler(saveFnc);
//   }, [trigger]);

//   const [debounceHandler] = useDebouncedCallback(() => saveFnc, 1000);
//   return { saveFnc };
// };

export default function EditorSlides() {
  const [controller, setController] = useState({ ...init.contr });
  const [formData, setFormData] = useState({ ...init.form });
  const [activeId, setActiveId] = useState('');
  const [slideIndex, setSlideIndex] = useState(null);

  const dispatch = useDispatch();

  const store = useSelector(s => s.slides);
  const activePost = useSelector(s => s.slides.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  //#region AUTOSAVE
  useEffect(() => {
    controller.trigger > 0 && debounceHandler(activeId, formData);
  }, [controller.trigger]);
  const [debounceHandler] = useDebouncedCallback(
    (activeId, formData) => updateProject(activeId, formData),
    1000,
  );
  async function updateProject(activeId, formData) {
    dispatch(api.patchOne(activeId, formData));
  }
  //#endregion

  let props = {
    controller,
    setController,
    formData,
    setFormData,
    activeId,
    setActiveId,
    slideIndex,
    setSlideIndex,
  };

  return (
    <BacksideView hasMenu="true">
      <Menu title="Slides App">
        <span>
          {activeId && slideIndex === null && <Prese.Menu {...props} />}
          {slideIndex !== null && <Slide.Menu {...props} />}
        </span>

        <Controllers edit={true} delete={true} {...props} />
      </Menu>

      {store.length ? (
        !activeId ? (
          <Prese.List mapData={store} {...props} />
        ) : (
          formData && (
            <>
              {slideIndex === null ? (
                <Slide.List mapData={formData.slides} {...props} />
              ) : (
                <Slide.Page data={formData.slides[slideIndex]} {...props} />
              )}
            </>
          )
        )
      ) : (
        <BsLoading />
      )}
    </BacksideView>
  );
}
