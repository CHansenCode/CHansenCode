import css from './style.module.scss';

export const CodeElement = props => {
  return (
    <pre className={css.pre} {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
