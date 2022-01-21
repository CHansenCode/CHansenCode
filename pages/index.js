import { Section, AnimatedLogo, FlexCenter } from 'components';
import { Logo, LayeredImage } from 'chansencode-lib';

export default function Home() {
  return (
    <Section>
      <div style={{ height: '40rem', width: '100%' }}>
        <LayeredImage distortMax={1}>
          <FlexCenter padding="20% 30% 20% 10%">
            <AnimatedLogo />
          </FlexCenter>

          <div></div>
        </LayeredImage>
      </div>
    </Section>
  );
}
