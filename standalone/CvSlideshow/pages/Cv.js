import { useState } from 'react';

import { Flex, Label, MapTags, Paragraph } from '../components';

import css from './styles/Cv.module.scss';

import { Timeline } from '../components';

export const Cv = () => {
  const [activeData, setActiveData] = useState({ ...initActiveData });
  return (
    <div className={css.main}>
      <div className={css.profile}>
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
          <Paragraph title="Kompetenser"> stuff comes here</Paragraph>
          <Paragraph title="Kompetenser">more stuff here</Paragraph>
        </div>
      </div>

      <div className={css.details}>
        <header className={css.header}>
          <h4>{activeData.title}</h4>
        </header>

        <div style={{ width: '100%' }}>
          <Flex>
            <Label label="employer :" text={activeData.employer} />
            <Label label="location :" text={activeData.location} />
          </Flex>

          <Flex padding="0 0.2rem" justifyContent="space-between">
            <Label label="role :">
              <p className="sc">{activeData.role}</p>
            </Label>
            <Label label="country :" text={activeData.country} />
          </Flex>
        </div>

        <div>
          <p>{activeData.descr}</p>
        </div>

        <div className={css.body}>
          <MapTags title="tags :" arr={activeData.tags} />
        </div>

        <footer className={css.footer}>
          <div>
            <h5>from :</h5>

            <p>{activeData.from}</p>
          </div>

          <div>
            <h5>until :</h5>

            <p>{activeData.to}</p>
          </div>
        </footer>
      </div>

      <Timeline activeData={activeData} setActiveData={setActiveData} />
    </div>
  );
};

const initActiveData = {
  category: '', // 'job', 'education' or 'extra'

  id: '', // any, as long as unique
  short: '', // for viewing in the timeline
  employer: '',
  title: '',
  location: '',
  tags: [''],
  descr: '',

  from: '',
  to: '',
};
