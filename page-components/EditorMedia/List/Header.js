import { Button } from 'components';

import css from './style.module.scss';

export const Header = ({ children }) => {
  return (
    <div className={css.header}>
      <Button width="2rem" padding="0" />
      <Button width="9rem" margin="0 1rem" padding="0.25rem 0" text="title" />
      <Button
        width="9rem"
        margin="0 1rem"
        padding="0.25rem 0"
        text={`category`}
      />
      <Button
        width="9rem"
        margin="0 1rem"
        padding="0.25rem 0"
        text={`project`}
      />
      <Button
        width="9rem"
        margin="0 1rem"
        padding="0.25rem 0"
        text={`Creation date :`}
      />
    </div>
  );
};
