import { useRouter } from 'next/router';

import { Button } from 'chansencode-lib';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Calendar = ({ onClick }) => {
  //
  const router = useRouter();
  const { pathname } = useRouter();

  let path = '/calendar';
  let active = pathname === path;

  return (
    <Button className={`pc5b ${active ? 'sc' : ''}`} onClick={onClick}>
      <AiOutlineCalendar />
    </Button>
  );
};
