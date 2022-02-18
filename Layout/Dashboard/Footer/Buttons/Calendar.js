import { useRouter } from 'next/router';

import { Button } from 'components';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Calendar = () => {
  //
  const router = useRouter();
  const { pathname } = useRouter();

  let path = '/dashboard/calendar';
  let active = pathname === path;

  async function goTo() {
    router.push(path);
  }

  return (
    <Button className={`pc5b ${active ? 'sc' : ''}`} onClick={goTo}>
      <AiOutlineCalendar />
    </Button>
  );
};
