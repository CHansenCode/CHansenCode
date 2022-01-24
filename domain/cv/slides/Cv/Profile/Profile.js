import { SiAdobe, SiBlender, SiAutodesk, SiSketch } from 'react-icons/si';

import { Paragraph } from 'components';

import css from './Profile.module.scss';

export const Profile = ({ profile, setProfile, view, setView }) => {
  return (
    <div className={`pc3b ${css.profile}`}>
      <header>
        <h2>CURRICULUM VITAE</h2>
        <h2>CURRICULUM VITAE</h2>
        <h5>för</h5>
        <h3>Christoffer Hansen</h3>
      </header>

      <Paragraph title="traits">
        <h4>- Innovativ {`&`} nyskapande</h4>
        <h4>- Självdriven {`&`} flitig</h4>
        <h4>- Snäll {`&`} trevlig</h4>
      </Paragraph>

      <div>
        <h4>
          Utbildad <b>Arkitekt MAA</b> från Köpenhamns arkitektskola <br />
          <i>{` & `}</i>
          Självlärd <b>Front-end kodare</b>
        </h4>
      </div>

      <div className={css.grid}>
        <Paragraph title="Kompetenser"></Paragraph>
        <Paragraph title="Kompetenser"></Paragraph>
      </div>
    </div>
  );
};
