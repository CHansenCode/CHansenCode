import { Section, FlexCenter } from 'components';

import CvSlideshow from 'standalone/CvSlideshow';

export default function Portfolio() {
  return (
    <Section minHeight="100vh" flex="true" center="true" column="true">
      <CvSlideshow />
    </Section>
  );
}
