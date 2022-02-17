import { Section, Grid, Empty } from 'components';

import { ContactForm } from 'page-components/contact';

export default function Contact() {
  return (
    <>
      <Empty height="20vh" />

      <Section>
        <Grid>
          <div />

          <ContactForm />
        </Grid>
      </Section>
    </>
  );
}
