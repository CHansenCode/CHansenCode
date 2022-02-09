import { useState, useEffect } from 'react';

import { Flex, Label, MapTags, Paragraph } from '../components';

import css from './styles/Cv.module.scss';

import { Timeline } from '../components';
import axios from 'axios';

export const Cv = ({ ...props }) => {
  const [occupations, setOccupations] = useState([]);
  const [activePost, setActivePost] = useState({ ...initData });

  useEffect(() => {
    props.activeId &&
      setActivePost(occupations.find((p, i) => p._id === props.activeId));
  }, [props.activeId]);

  useEffect(() => {
    async function getOccupations() {
      const { data } = await axios.get('./api/cv/occupations');
      setOccupations(data);
    }

    getOccupations();
  }, []);

  return occupations ? (
    <div className={css.main}>
      <Profile />

      <Details data={activePost} />

      <Timeline data={occupations} setActiveId={props.setActiveId} />
    </div>
  ) : (
    <div>{`Loading ...`}</div>
  );
};

const initData = {
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

const Profile = () => {
  return (
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
  );
};

const Details = ({ data }) => {
  return data ? (
    <div className={css.details}>
      <header className={css.header}>
        <h4>{data.title}</h4>
      </header>

      <div style={{ width: '100%' }}>
        <Flex>
          <Label label="employer :" text={data.employer} />
          <Label label="location :" text={data.location} />
        </Flex>

        <Flex padding="0 0.2rem" justifyContent="space-between">
          <Label label="role :">
            <p className="sc">{data.role}</p>
          </Label>
          <Label label="country :" text={data.country} />
        </Flex>
      </div>

      <div>
        <p>{data.descr}</p>
      </div>

      <div className={css.body}>
        <MapTags title="tags :" arr={data.tags} />
      </div>

      <footer className={css.footer}>
        <div>
          <h5>from :</h5>

          <p>{data.from}</p>
        </div>

        <div>
          <h5>until :</h5>

          <p>{data.to}</p>
        </div>
      </footer>
    </div>
  ) : (
    <div>no data yet</div>
  );
};
