import { Button } from 'components';

const Navigation = () => {
  return (
    <div>
      <Button>
        <h3>-</h3>
      </Button>

      <Pagination />

      <Button>
        <h3>-</h3>
      </Button>
    </div>
  );
};

export default Navigation;
