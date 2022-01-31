import { FullSection, Flex } from 'components';

export default function CalendarPage({ ...props }) {
  return (
    <FullSection>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h4>Calendar</h4>
          <br />
          <h5>
            <i>Under development</i>
            <br />
            <i>ETA: N/A</i>
          </h5>
          <br />
          <p>
            Calendar filled with project-specific deadlines and deliverables.
            <br />
            <br />
            Advanced feature: 'generate: todays-to-do-list'
            <br />
            <i>
              Scans through the project's made in project-planner-app and fills
              todays scheduled hours with the most urgent tasks (based on
              time-to-deadline/estimated-minutes-left ratio)
            </i>
          </p>
        </Flex>
      </Flex>
    </FullSection>
  );
}
