import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Nav, LandingPage } from 'page-components/slidesFront';
import { View, KeyEvents, Slide } from 'page-components/slidesFront';

import * as api from 'api-lib/dispatch/slides';

export default function Slides({ ...props }) {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);

  const store = useSelector(s => s.slides);
  const activePost = useSelector(s =>
    s.slides.find((o, i) => o._id === activeId),
  );
  useEffect(() => dispatch(api.getAll()), [dispatch]);

  props = {
    ...props,
    activeId,
    setActiveId,
    slideIndex,
    setSlideIndex,
  };

  return (
    <>
      <div id="main_slides_pres">
        {activeId && <KeyEvents activePost={activePost} {...props} />}

        {activeId ? (
          <View>
            <Nav data={activePost} {...props} />
            <Slide activeSlide={activePost.slides[slideIndex]} {...props} />
          </View>
        ) : (
          <LandingPage store={store} {...props} />
        )}
      </div>

      <style jsx>
        {`
          #main_slides_pres {
            position: relative;
            height: 100vh;
            width: 100vw;

            overflow: hidden;

            box-shadow: inset 0 0 10rem 5rem rgba(0, 0, 0, 0.05);
            background: radial-gradient(
              rgba(0, 100, 128, 0.02) 0%,
              rgba(0, 100, 128, 0.05) 40%,
              rgba(0, 100, 128, 0.1) 100%
            );
          }
        `}
      </style>
    </>
  );
}
