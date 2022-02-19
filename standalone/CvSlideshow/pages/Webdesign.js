import { FadeIn } from '../components';

import css from './styles/Portfolio.module.scss';

export const Webdesign = () => {
  return (
    <FadeIn>
      <div className={css.main}>
        <>
          <h4 className="sc">What do i work with ?</h4>

          <Project />
        </>
      </div>
    </FadeIn>
  );
};

const Project = () => {
  return (
    <>
      <div className="cow">
        <h4>cow</h4>
      </div>

      <style jsx>
        {`
          .cow {
            width: 100%;

            border: thin solid;
          }
        `}
      </style>
    </>
  );
};
