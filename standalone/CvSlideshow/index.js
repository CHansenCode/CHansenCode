import { useState } from 'react';

import { Cv, Letter, Web, Contact } from './pages';
import { Main, Nav } from './Layout';
import { Lock } from './components';

export default function CvSlideshow() {
  const [whom, setWhom] = useState('cadmin');
  const [page, setPage] = useState(1);

  return whom ? (
    <>
      <Main>
        {page === 1 && <Cv />}
        {page === 2 && <Letter />}
        {page === 3 && <Web />}
        {page === 4 && <Contact />}
      </Main>

      <Nav page={page} setPage={setPage} />
    </>
  ) : (
    <Lock whom={whom} setWhom={setWhom} />
  );
}
