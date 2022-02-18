import { useState, useEffect } from 'react';
import axios from 'axios';

import { FadeIn, Details, Timeline, Profile } from '../components';

import css from './styles/Cv.module.scss';

export const Cv = ({ ...props }) => {
  const [occupations, setOccupations] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [activeId, setActiveId] = useState('');

  useEffect(
    () => setActivePost(occupations.find((p, i) => p._id === activeId)),
    [activeId],
  );

  async function getOccupations() {
    const { data } = await axios.get('/api/cv/occupations');
    setOccupations(data);
  }
  useEffect(() => getOccupations(), []);

  return occupations ? (
    <FadeIn>
      <div className={css.main}>
        <Profile />

        <Details data={activePost} />

        <Timeline data={occupations} setActiveId={setActiveId} />
      </div>
    </FadeIn>
  ) : (
    <div>{`Loading ...`}</div>
  );
};
