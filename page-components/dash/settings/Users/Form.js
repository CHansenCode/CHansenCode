import { Form, TypeInput } from 'components';

export const Form = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <TypeInput />
    </Form>
  );
};
