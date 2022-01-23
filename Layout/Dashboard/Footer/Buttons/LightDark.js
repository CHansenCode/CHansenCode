import { useRouter } from 'next/router';

import { Button } from 'chansencode-lib';
import { GiYinYang } from 'react-icons/gi';

export const LightDark = ({ ...props }) => {
  //
  async function toggleLightMode() {
    props.setColors({ ...props.colors, darkmode: !props.colors.darkmode });
  }

  return (
    <Button border="none" onClick={toggleLightMode}>
      <GiYinYang />
    </Button>
  );
};
