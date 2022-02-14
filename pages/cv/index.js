import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import CvSlideshow from 'standalone/CvSlideshow';
import { NoPid } from 'page-components/cv/NoPid';

import { TypeInput, Button, ObjectViewer } from 'components';

import * as api from 'api-axios/cv';
import getOne from 'api-axios/cv';
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

  return (
    loaded && (
      <View>
        <>{!noUser ? <CvSlideshow data={data} /> : <NoPid />}</>
      </View>
    )
  );
}

const View = props => {
  return (
    <>
      <div className="cv_view_wrapper">
        <div className="cv_view_child_wrapper">{props.children}</div>
      </div>

      <style jsx>
        {`
          .cv_view_wrapper {
            height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cv_view_child_wrapper {
            height: 100%;
            width: 100%;
            max-width: 1200px;
            max-height: 90vh;
          }
        `}
      </style>
    </>
  );
};

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
