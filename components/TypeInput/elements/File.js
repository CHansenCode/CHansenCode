import { useRef, useState } from 'react';

import css from './elements.module.scss';

export const File = ({ ...props }) => {
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const fileInput = useRef();

  async function handleClick() {
    fileInput.current.click();
  }

  let trigger = hover || focused ? true : false;

  return (
    <div
      className={`${trigger ? `sc7b sc ${css.active}` : 'pc7b'} ${css.file}`}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        ref={fileInput}
        type="file"
        onChange={props.onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {props.src ? <img className="pc5b" src={props.src} /> : <Placeholder />}
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className={css.placeholder_img}>
      <p>Choose image</p>
    </div>
  );
};
