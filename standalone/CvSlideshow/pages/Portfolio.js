import { FadeIn } from '../components';

import css from './styles/Portfolio.module.scss';

export const Portfolio = () => {
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
        <h4></h4>
      </div>

      <style jsx>
        {`
          .cow {
            width: 100%;
            height: 1rem;

            border: thin solid;
          }
        `}
      </style>
    </>
  );
};
