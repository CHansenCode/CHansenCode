import { BacksideView } from 'components/BacksideView';
import { Fold } from 'components';

import { Users } from 'page-components/dashSettings';

export default function SettingsPage({ ...props }) {
  return (
    <BacksideView title="Settings page">
      <Fold title="Users" fold={true}>
        <Users />
      </Fold>
    </BacksideView>
  );
}
