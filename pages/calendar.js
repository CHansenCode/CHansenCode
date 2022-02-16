import { BacksideView } from 'components/BacksideView';
import { Flex, PlannedFeature } from 'components';

export default function CalendarPage({ ...props }) {
  return (
    <BacksideView>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h3 className="sc">Calendar</h3>

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
              title="Calendar"
              text={`Calendar focused on being an interactive tool in conjunction with project planning and progress`}
            />
            <PlannedFeature
              title="Todays-To-Do-List"
              text={`Advanced feature: Generate to-do list for the day based on hours left to deadline in projects`}
            />
          </div>
        </Flex>
      </Flex>
    </BacksideView>
  );
}
