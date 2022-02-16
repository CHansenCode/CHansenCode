import { useState } from 'react';

import { BacksideView } from 'components/BacksideView';
import { Flex } from 'components';
import { Button, List, Fold } from 'components';

import { User } from 'page-components/settings/users';

import * as api from 'api-axios/users';

export default function SettingsPage({ ...props }) {
  const [data, setData] = useState([]);

  async function cow() {
    setData(await api.getAll());
  }

  return (
    <BacksideView hasMenu={true} title="Settings page">
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
    </BacksideView>
  );
}
