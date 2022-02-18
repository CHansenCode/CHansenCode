import { Button } from '../';

export const ButtonType = ({ type, className, ...props }) => {
  switch (type) {
    //

    case 'back':
      return (
        <Button {...props}>
          <h4>{`<`}</h4>
        </Button>
      );
      break;

    case 'delete':
      return (
        <Button className={`alert alert-bg1 alert-b5 ${className}`} {...props}>
          <h4>{`X`}</h4>
        </Button>
      );
      break;

    default:
      return <Button text="no type specified" {...props} />;
      break;
  }
};
