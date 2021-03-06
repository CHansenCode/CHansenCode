import { useRouter } from 'next/router';

import { Button } from 'components';
import { AiOutlineWechat } from 'react-icons/ai';

export const Intercom = () => {
  //
  const router = useRouter();
  const { pathname } = useRouter();

  let path = '/dashboard/intercom';
  let active = pathname === path;

  async function goTo() {
    router.push(path);
  }

  return (
    <Button className={`pc5b ${active ? 'sc' : ''}`} onClick={goTo}>
      <AiOutlineWechat />
    </Button>
  );
};
