import { Section } from 'components';
import useUser from 'lib/useUser';

export default function Welcome() {
  const { user } = useUser({ redirectTo: '/', redirectIfFound: true });
  return (
    <Section>
      <h3>Welcome to the backside!</h3>
    </Section>
  );
}
