import { Button } from '../';

export const ButtonType = ({ type, ...props }) => {
  switch (type) {
    case 'back':
      return (
        <Button {...props}>
          <h4>{`<`}</h4>
        </Button>
      );
      break;

    default:
      return <Button text="no type specified" {...props} />;
      break;
  }
};
