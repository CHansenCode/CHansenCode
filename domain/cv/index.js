import React, { useState } from 'react';

import { Cv, Letter, Web, Contact } from './slides';
import { Slide } from './Slide';

export default function CvSlideshow() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Slide>
        {page === 1 && <Cv />}
        {page === 2 && <Letter />}
        {page === 3 && <Web />}
        {page === 4 && <Contact />}
      </Slide>
    </>
  );
}
