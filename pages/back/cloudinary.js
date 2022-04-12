import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components';
import { CloudImg } from 'components/CloudImg';
import { BacksideView, Menu, Controllers } from 'components/BacksideView';

import * as api from 'api-lib/dispatch/media';

import css from './cloud.module.scss';

export default function Page({ ...props }) {
  const [fileInput, setFileInput] = useState('');

  const dispatch = useDispatch();

  const store = useSelector(s => s.media);
  const activePost = useSelector(s => s.media.find(o => o._id === activeId));
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);

  const handleFileChange = async e => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileInput(reader.result);
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!fileInput) {
      return;
    }
    api.postOne(fileInput);
  };

  const uploadImage = async base64EncodedImage => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
    }
  };

  let imgArray = [];

  return (
    <>
      <BacksideView hasMenu="true">
        <Menu title="Slides App">
          <span></span>
          <Controllers {...props} />
        </Menu>

        <div style={{ height: '100%', width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <input type="file" mame="file" onChange={handleFileChange} />
            <Button text="submit" padding="1rem" onClick={handleSubmit} />
          </form>

          <img
            src={fileInput}
            alt="preview-input-image"
            style={{ maxHeight: '200px', marginTop: '2rem' }}
          />

          <List arrayData={imgArray} />
        </div>
      </BacksideView>
    </>
  );
}

const List = () => {
  return (
    <ul className={css.list}>
      <CloudImg />
    </ul>
  );
};
