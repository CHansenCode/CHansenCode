import { useState } from 'react';

import { FullSection, Flex, PlannedFeature, SectionMenu } from 'components';
import { Button, ObjectViewer, List, Fold } from 'components';

import { User } from 'page-components/settings/users';

import * as api from 'api-axios/users';

export default function SettingsPage({ ...props }) {
  const [data, setData] = useState([]);

  async function cow() {
    setData(await api.getAll());
  }

  return (
    <FullSection hasMenu={true} title="Settings page">
      <SectionMenu>
        <div></div>

        <div>
          <Button text="EDIT" />
          <Button text="DEL" />
        </div>
      </SectionMenu>

      <Fold title="Users" fold={true}>
        <Flex>
          <Button
            padding="0.5rem 1rem"
            text="choose organisation >"
            onClick={() => alert('not yet')}
          />
          <Button padding="0.5rem 1rem" text="get users" onClick={cow} />
        </Flex>

        <List title="users">
          {data
            ? data.map((user, i) => <User key={user._id} data={user} />)
            : 'no users fetched'}
        </List>
      </Fold>

      {/* <Flex flexDirection="column" center={true}>
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
      </Flex> */}
    </FullSection>
  );
}

export async function getServerSideProps(context) {
  // const {data} = await api.getAll();

  // console.log(users);

  return {
    props: { users: [{ cow: 'yes' }] },
  };
}
