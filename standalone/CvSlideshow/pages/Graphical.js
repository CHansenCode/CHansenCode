import Image from 'next/image';
import { FadeIn } from '../components';

import css from './styles/Graphical.module.scss';

export const Graphical = () => {
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
      src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
    },
    {
      index: 4,
      src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
    },
    {
      index: 5,
      src: 'https://media.chansen.design/architecture/ishallen/c2.jpg',
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
  return (
    <FadeIn>
      <div className={css.main}>
        <div className={css.gallery}>
          <>
            {images.map((c, i) => (
              <div key={`img${i}`} className={css.img_wrapper}>
                <Image height="250px" width="250px" src={c.src} />
              </div>
            ))}
          </>
        </div>
      </div>
    </FadeIn>
  );
};
