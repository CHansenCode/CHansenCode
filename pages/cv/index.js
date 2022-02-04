import { Section, FlexCenter } from 'components';

import { useRouter } from 'next/router';

export default function CV() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Section padding="20vh 0 20vh 0">
      <p>index</p>
      <p>Route: {pid}</p>
    </Section>
  );
}
