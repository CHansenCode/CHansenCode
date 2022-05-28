import { useCallback } from 'react';

import { Input, Textarea, Select, RichText, File } from './elements';

import css from './style.module.scss';

export function TypeInput(props) {
  //

  const RenderType = useCallback(props => {
    switch (props.type) {
      case 'input':
        return <Input {...props} />;
        break;
      case 'password':
        return <Input password={true} {...props} />;
        break;
      case 'textarea':
        return <Textarea {...props} />;
        break;
      case 'select':
        return <Select {...props} />;
        break;
      case 'richtext':
        return <RichText {...props} />;
        break;
      case 'file':
        return <File {...props} />;
        break;
      default:
        return <Input {...props} />;
        break;
    }
  }, []);

  const iStyle = {
    ...props.style,
    height: props.type === 'file' && '100%',
    marginBottom: props.marginBottom && props.marginBottom,
    maxWidth: props.maxWidth && props.maxWidth,
  };

  return (
    <div style={iStyle} className={css.wrapper}>
      {props.label && <Label {...props} />}
      <RenderType {...props} />
    </div>
  );
}

const Label = props => {
  return (
    <header className={css.label_wrapper}>
      <h6 className={css.label}>
        {props.label} :{' '}
        {props.required ? (
          <span className={`sc ${css.required}`}>required *</span>
        ) : (
          ''
        )}
      </h6>

      <Info text={props.info} />
    </header>
  );
};

const Info = props => {
  return (
    <aside className={css.info_on_hover}>
      {props.text && (
        <>
          <h6>i</h6>
          <h5 className="bg pc3b">{props.text}</h5>
        </>
      )}
    </aside>
  );
};
