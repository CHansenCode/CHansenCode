import { Button } from 'components';
import { AiOutlineRollback } from 'react-icons/ai';

export const GoBack = ({ slideIndex, setActiveId, setSlideIndex }) => {
  //
  async function goBack() {
    if (slideIndex === null) {
      setActiveId('');
    } else {
      setSlideIndex(null);
    }
  }

  return (
    <Button onClick={() => goBack()}>
      <AiOutlineRollback size="1.25rem" />
    </Button>
  );
};
