import { useState, useEffect } from 'react';

import CvSlideshow from 'standalone/CvSlideshow';
import { NoPid } from 'page-components/cv/NoPid';

import axios from 'axios';

export default function CV({ pid }) {
  const [data, setData] = useState({});
  const [noUser, setNoUser] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => fetchData(pid), [pid]);
  async function fetchData(pid) {
    try {
      const { data } = await axios.get(`./api/cv/?pid=${pid}`);
      setData(data);

      setNoUser(false);
      setLoaded(true);
    } catch (error) {
      setNoUser(true);
      setLoaded(true);
    }
  }

  return loaded && <>{!noUser ? <CvSlideshow data={data} /> : <NoPid />}</>;
}

export async function getServerSideProps({ query }) {
  const { pid } = query;

  if (pid) {
    return {
      props: { pid },
    };
  } else {
    return {
      props: {},
    };
  }
}
