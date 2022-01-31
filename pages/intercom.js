import { FullSection, Flex } from 'components';

export default function Intercom({ ...props }) {
  return (
    <FullSection>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h4>Intercom</h4>
          <br />
          <h5>
            <i>Under development</i>
            <br />
            <i>ETA: N/A</i>
          </h5>
          <br />
          <p>
            This will be a chat page where you can connect to team-members and
            customers alike.
            <br />
            <br />
            It will also contain 'project-chats' that the user is part of with
            appropriate milestone-messages as stages are complete.
          </p>
        </Flex>
      </Flex>
    </FullSection>
  );
}
