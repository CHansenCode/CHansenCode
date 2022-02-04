import { Section, Empty } from 'components';

import { useRouter } from 'next/router';

export default function CV() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Section>
      <Empty height="10vh" />
      <p>{pid}</p>
    </Section>
  );
}
