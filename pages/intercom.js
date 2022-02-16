import { BacksideView } from 'components/BacksideView';
import { Flex, PlannedFeature } from 'components';

export default function Intercom({ ...props }) {
  return (
    <BacksideView>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h3 className="sc">Intercom</h3>

          <br />

          <h5>
            <i>Under development</i>
            <br />
            <i>ETA: N/A</i>
          </h5>

          <br />
          <br />

          <div style={{ padding: '1rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Planned features :</h4>
            <PlannedFeature
              title="Intercom / Chat"
              text={`This will be a chat page where you can connect to team-members and customers alike.`}
            />
            <PlannedFeature
              title="Project chat / webhooks"
              text={`Discussion and updates regarding project progress and cooperation`}
            />
          </div>
        </Flex>
      </Flex>
    </BacksideView>
  );
}
