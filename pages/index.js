import axios from 'axios';

import { Section, AnimatedLogo, Flex, Empty } from 'components';
import { LayeredImage, RenderRichText } from 'components';

export default function Home({ ...props }) {
  //

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
        <RenderRichText data={props.text && props.texts[0]} />
      </Section>
    </>
  );
}

// export async function getStaticProps(context) {
//   const { data } = await axios.get('http://localhost:3000/api/cv');

//   return {
//     props: { texts: data }, // will be passed to the page component as props
//   };
// }
