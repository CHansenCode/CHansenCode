import { useState } from 'react';

import { Cv, Letter, Web, Contact } from './slides';
import { Button } from 'components';
import { Slide } from './Slide';
import { Lock } from './Lock';

export default function CvSlideshow() {
  const [whom, setWhom] = useState('');
  const [page, setPage] = useState(1);

  return whom ? (
    <>
      <Slide>
        {page === 1 && <Cv />}
        {page === 2 && <Letter />}
        {page === 3 && <Web />}
        {page === 4 && <Contact />}
      </Slide>

      <nav>
        <Button
          padding="0.5rem 1rem"
          className="sc"
          onClick={() => setPage(page - 1)}
        >
          <h3>-</h3>
        </Button>
        <Button
          padding="0.5rem 1rem"
          className="sc"
          onClick={() => setPage(page + 1)}
        >
          <h3>+</h3>
        </Button>
      </nav>
    </>
  ) : (
    <Lock whom={whom} setWhom={setWhom} />
  );
}
