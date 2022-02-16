import { BacksideView } from 'components/BacksideView';
import { Flex, PlannedFeature } from 'components';

export default function Welcome() {
  return (
    <BacksideView>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h3 className="sc">Backside homepage</h3>

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
              title="Workload-widget"
              text={`Will calculate (current planned workhours / amount of work (minutes) until deadlines)`}
            />
            <PlannedFeature
              title="Update app"
              text={`News flow of important events since last log in`}
            />
            <PlannedFeature
              title="Message-widget / Urgent(action needed)-widget"
              text={`If any important notices -> urgent-widget <- / else last messages`}
            />
          </div>
        </Flex>
      </Flex>
    </BacksideView>
  );
}
