import { useRouter } from 'next/router';

import { Button } from 'components';
import { AiOutlineSetting } from 'react-icons/ai';

export const Settings = () => {
  //
  const router = useRouter();
  const { pathname } = useRouter();

  let path = '/dashboard/settings';
  let active = pathname === path;

  async function goTo() {
    router.push(path);
  }

  return (
    <Button className={`pc5b ${active ? 'sc' : ''}`} onClick={goTo}>
      <AiOutlineSetting />
    </Button>
  );
};
