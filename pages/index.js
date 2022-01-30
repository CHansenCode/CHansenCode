import { Section, AnimatedLogo, Flex, Empty } from 'components';
import { LayeredImage } from 'components';

export default function Home() {
  return (
    <>
      <Section>
        <div style={{ height: '40rem', width: '100%' }}>
          <LayeredImage distortMax={1}>
            <Flex padding="20% 30% 20% 10%">
              <AnimatedLogo />
            </Flex>

            <div></div>
          </LayeredImage>
        </div>
      </Section>

      <Empty height="20vh" />

      <Section>
        <div style={{ height: '40rem', width: '100%' }}>
          <LayeredImage distortMax={1}>
            <Flex padding="20% 30% 20% 10%">
              <AnimatedLogo />
            </Flex>

            <div></div>
          </LayeredImage>
        </div>
      </Section>
    </>
  );
}
