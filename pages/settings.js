import { FullSection, Flex, PlannedFeature } from 'components';

export default function SettingsPage({ ...props }) {
  return (
    <FullSection>
      <Flex flexDirection="column" center={true}>
        <Flex height="min-content" maxWidth="600px" flexDirection="column">
          <h3 className="sc">Settings page</h3>

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
              title="Users"
              text={`Create new users, will be in form of invitation by hotlink with serverless req.query strategy`}
            />
            <PlannedFeature
              title="User groups"
              text={`Add and remove users within groups, sort permissions etc`}
            />
            <PlannedFeature
              title="Meta settings"
              text={`Change title, colors & visible pages on the site. Meta/general, take the site down if needed etc.`}
            />
          </div>
        </Flex>
      </Flex>
    </FullSection>
  );
}
