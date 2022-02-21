import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Cimage, Button } from 'components';

import { DEPOPULATE_MODAL } from 'actions';

import css from './style.module.scss';

export const Modal = () => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const store = useSelector(state => state.imgModal);
  const open = store.length ? true : false;

  useEffect(() => setLoaded(true), []);

  async function depopulateModal() {
    dispatch({ type: DEPOPULATE_MODAL });
  }

  const iStyle = {
    inAnim: {
      pointerEvents: store.length ? 'all' : 'none',
      opacity: store.length ? '1' : '0',
      transition: '0.4s ease',
    },
  };

  const data = store[index];

  return (
    <div
      style={iStyle.inAnim}
      className={`${css.fixed}`}
      onClick={() => depopulateModal()}
    >
      {open && (
        <div className={css.grid}>
          {store && (
            <>
              <h3 className={css.click}>Click anywhere to close</h3>

              {/* <div className={css.img}></div> */}

              <div className={css.img}>
                <Cimage
                  src={data.uri.web ? data.uri.web : data.src}
                  height="100%"
                  width="100%"
                  objectFit="contain"
                />
              </div>

              <div className={css.img_text}>
                <h4 className={css.title}>{data.title ? data.title : '-'}</h4>

                <div className={css.tags}>
                  {dummyTags.map((t, i) =>
                    i === dummyTags.length ? (
                      <p key={`iTag${i}`}>{`${t}`}</p>
                    ) : (
                      <p key={`iTag${i}`}>{`${t}, `}</p>
                    ),
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const dummyTags = ['illustrator', 'photoshop', 'sketchup'];

const ImageViewer = ({ data }) => {
  return data ? (
    <>
      <h3 className={css.click}>Click anywhere to close</h3>

      {/* <div className={css.img}></div> */}

      <Cimage
        className={css.img}
        src={data.src}
        height="100%"
        width="100%"
        objectFit="contain"
      />

      <div className={css.img_text}>
        <h4 className={css.title}>{data.title ? data.title : '-'}</h4>

        <div className={css.tags}>
          {dummyTags.map((t, i) =>
            i === dummyTags.length ? (
              <p key={`iTag${i}`}>{`${t}`}</p>
            ) : (
              <p key={`iTag${i}`}>{`${t}, `}</p>
            ),
          )}
        </div>
      </div>
    </>
  ) : (
    <div />
  );
};
