import { useState } from 'react';

import { Cv, Letter, Web, Contact, Portfolio, PortfolioArch } from './pages';

import { Layout } from './Layout';

export default function CvSlideshow({ data, ...props }) {
  const [page, setPage] = useState(1);

  const pages = [
    'cv',
    'letter of motivation',
    'my webdev',
    'portfolio',
    'portfolioArch',
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
      {page === 4 && <Portfolio {...props} />}
      {page === 5 && <PortfolioArch {...props} />}
      {page === 6 && <Contact {...props} />}
    </Layout>
  );
}
