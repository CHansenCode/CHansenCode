import { useState, useEffect } from 'react';

import { Flex, Label, MapTags, Paragraph, FadeIn } from '../components';

import css from './styles/Cv.module.scss';
import { Details, Timeline, Profile } from '../components';
import axios from 'axios';

export const Cv = ({ ...props }) => {
  const [occupations, setOccupations] = useState([]);
  const [activePost, setActivePost] = useState({ ...initData });

  useEffect(
    () =>
      props.activeId &&
      setActivePost(occupations.find((p, i) => p._id === props.activeId)),
    [props.activeId],
  );

  async function getOccupations() {
    const { data } = await axios.get('./api/cv/occupations');
    setOccupations(data);
  }
  useEffect(() => getOccupations(), []);

  return occupations ? (
    <FadeIn>
      <div className={css.main}>
        <Profile />

        <Details data={activePost && activePost} />

        <Timeline data={occupations} setActiveId={props.setActiveId} />
      </div>
    </FadeIn>
  ) : (
    <div>{`Loading ...`}</div>
  );
};

const initData = {
  category: '', // 'job', 'education' or 'extra'

  id: '', // any, as long as unique
  short: '', // for viewing in the timeline
  employer: '',
  role: '',
  title: '',
  location: '',
  tags: [''],
  descr: '',

  from: '',
  to: '',
};
