import axios from 'axios';
import { useEffect, useState } from 'react';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';

export const GalleryConstructor = () => {
  const [data, setData] = useState([]);

  //   async function getMedia() {
  //     const res = await api.getShowcase();

  //     const sortation = await res.filter((d, i) => d.project === 'cv');

  //     setData(sortation);
  //   }

  //   useEffect(() => !data.length && getMedia(), []);

  return (
    <div className={css.main}>
      <img src="https://media.chansen.design/placeholder.jpg" />
      <h4>cow</h4>

      <button onClick={() => console.log(data)}>cow</button>
    </div>
  );
};
