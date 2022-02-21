import { FadeIn, Cimage } from '../components';
import { useDispatch } from 'react-redux';

import { POPULATE_MODAL } from 'actions';
import css from './styles/Graphical.module.scss';

export const Graphical = () => {
  //
  const dispatch = useDispatch();

  async function populateModal(data) {
    dispatch({ type: POPULATE_MODAL, payload: data });
  }

  return (
    <FadeIn>
      <div className={css.main}>
        <h4 className="sc">Graphical skills</h4>
        <div className={css.gallery}>
          <>
            {images.map((c, i) => (
              <Cimage
                key={`gallImg${i}`}
                height="100%"
                width="100%"
                src={c.src}
                onClick={e => populateModal(c)}
              />
            ))}
          </>
        </div>
      </div>
    </FadeIn>
  );
};

const images = [
  {
    index: 1,
    src: 'https://media.chansen.design/architecture/ishallen/a101.jpg',
  },
  {
    index: 2,
    src: 'https://media.chansen.design/architecture/openkitchen/kokkenview.jpg',
  },
  {
    index: 3,
    src: 'https://media.chansen.design/architecture/annerberg/festsalen_detalj_skorstenen_elevation.jpg',
  },
  {
    index: 4,
    src: 'https://media.chansen.design/architecture/ishallen/v2.jpg',
  },
  {
    index: 5,
    src: 'https://media.chansen.design/placeholder.jpg',
  },
  {
    index: 6,
    src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
  },
  {
    index: 7,
    src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
  },
  {
    index: 8,
    src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
  },
];
