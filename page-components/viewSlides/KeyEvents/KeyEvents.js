import { useRef, useEffect } from 'react';

export const KeyEvents = ({ ...props }) => {
  //
  const stealFocus = useRef();

  async function keyEvents(e) {
    //
    // console.log(e.key);

    switch (e.key) {
      case 'ArrowLeft': {
        e.preventDefault();
        if (props.slideIndex === 0) {
          return;
        } else {
          props.setSlideIndex(props.slideIndex - 1);
        }
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        if (props.slideIndex === props.activePost.slides.length - 1) {
          return;
        } else {
          props.setSlideIndex(props.slideIndex + 1);
        }
        break;
      }
      case 'Backspace': {
        e.preventDefault();
        props.activeId && props.setActiveId('');
        props.slideIndex && props.setSlideIndex(0);
        break;
      }
      default: {
        return;
      }
    }
  }

  useEffect(() => {
    stealFocus.current.focus();
  }, []);

  return (
    <>
      <input
        className="steal_focus_input"
        ref={stealFocus}
        onBlur={() => stealFocus.current.focus()}
        onKeyDown={e => keyEvents(e)}
      />

      <style jsx>{`
        .steal_focus_input {
          position: absolute;
          top: -10rem;
          left: -10rem;
          opacity: 0;
        }
      `}</style>
    </>
  );
};
