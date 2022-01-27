import { useRouter } from 'next/router';

import { Button } from 'components';
import { AiOutlineHome } from 'react-icons/ai';

export const Home = () => {
  //
  const router = useRouter();
  const { pathname } = useRouter();

  let path = '/';
  let active = pathname === path;

  async function goTo() {
    router.push(path);
  }

  return (
    <Button className={`pc5b ${active ? 'sc' : ''}`} onClick={goTo}>
      <AiOutlineHome />
    </Button>
  );
};
