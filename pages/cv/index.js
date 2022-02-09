import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import CvSlideshow from 'standalone/CvSlideshow';

import * as api from 'api-axios/cv';

export default function CV() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  async function getData() {
    setData(await api.getOne(pid));
  }

  useEffect(() => {
    async function getData() {
      setData(await api.getOne(pid));
    }

    getData();
  }, [pid]);

  return (
    <View>
      <>{pid ? <CvSlideshow data={data} /> : <NoPid />}</>
    </View>
  );
}

const View = ({ pid, children }) => {
  return (
    <>
      <div className="cv_view_wrapper">
        <div className="cv_view_child_wrapper"> {children}</div>
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

const NoPid = () => {
  return (
    <>
      <div className="cv_no_pid">
        <h3>
          This is a page that i have developed to share Applications with
          potential employers.
        </h3>

        <br />
        <br />

        <p>
          {`You are seeing this text because the unique key "?pid= <u>NAME</u> "
          wasn't provided. If you haven't received an email from me with the
          corresponding link then you are asked to go back to the homepage and
          continue browsing`}
        </p>
      </div>

      <style jsx>
        {`
          .cv_no_pid {
            max-height: 700px;
            width: 90vw;
            max-width: 600px;
          }
        `}
      </style>
    </>
  );
};
