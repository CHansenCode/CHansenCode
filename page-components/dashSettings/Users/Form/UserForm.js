import { Form, TypeInput } from 'components';

export const UserForm = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <TypeInput />
    </Form>
  );
};
