import { useState, useEffect } from 'react';

import { Section, Button, ObjectViewer, Loading, Empty } from 'components';
import CvSlideshow from 'standalone/CvSlideshow';

import { useRouter } from 'next/router';

import * as api from 'api-axios/cv';

export default function CV() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  async function cow() {
    setData(await api.getOne(pid));
  }

  useEffect(() => {
    async function cow() {
      setData(await api.getOne(pid));
    }

    cow();
  }, [pid]);

  return (
    <Section>
      {data ? (
        <>
          <Button text="reload data" onClick={() => cow()} />
          <CvSlideshow data={data} />

          <ObjectViewer data={data} />
        </>
      ) : (
        <>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Empty height="2rem" />
            <h1>Fetching data...</h1>

            <ObjectViewer title="data" data={data} />
          </div>
        </>
      )}
    </Section>
  );
}
