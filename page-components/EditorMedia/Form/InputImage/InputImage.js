import { useRef } from 'react';

import { Cimage } from 'components';

import { compress } from '.';

import css from './style.module.scss';

export const InputImage = ({ ...props }) => {
  const inputRef = useRef(null);

  async function onClickHandler() {
    inputRef && inputRef.current.click();
  }

  async function handleFileChange(event) {
    try {
      const file = event.target.files[0];
      const uri = {
        web: await compress.web(file),
        mobile: await compress.mobile(file),
        thumb: await compress.thumb(file),
        icon: await compress.icon(file),
      };
      props.setFormData({ ...props.formData, uri: uri });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={css.wrapper} onClick={onClickHandler}>
      <input type="file" ref={inputRef} onChange={e => handleFileChange(e)} />

      <Cimage height="12rem" width="12rem" src={props.src} />
    </div>
  );
};
