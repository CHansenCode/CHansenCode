import { useState } from 'react';

import { Cv, Letter, Web, Contact } from './pages';

//testing
import { Webdesign, Portfolio, Graphical } from './pages';

import { Layout } from './Layout';

export default function CvSlideshow({ data, ...props }) {
  const [page, setPage] = useState(5);

  const pages = [
    'cv',
    'letter of motivation',
    'my webdev',
    'portfolio',
    'Graphical',
    'contact form',
  ];

  props = {
    ...props,
    page,
    setPage,
    pages,
  };

  return (
    <Layout {...props}>
      {page === 1 && <Cv {...props} />}
      {page === 2 && <Letter data={data} {...props} />}
      {page === 3 && <Web {...props} />}
      {page === 4 && <Webdesign {...props} />}
      {page === 5 && <Graphical {...props} />}
      {page === 6 && <Contact {...props} />}
    </Layout>
  );
}
