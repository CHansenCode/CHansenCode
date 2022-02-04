import React, { useState, useCallback, useRef, useEffect } from 'react';

import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { ToolBar } from './ToolBar';
import { CustomEditor } from './CustomEditor';
import { Leaf } from './Leaf';
import { CodeElement, DefaultElement } from './elements';

import css from './RichText.module.scss';

const defaultInitValue = [{ type: 'paragraph', children: [{ text: '' }] }];

export const RichText = ({ objKey, ...props }) => {
  //Hot-load fix in react development mode.
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;

  useEffect(() => {
    //hot-fix requires us to manually set value from outer changes due to lack of state
    editor.children = props.value;
    setValue(props.value);
  }, [props.activeId, props.formData, props.value]);

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(props.value);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  async function keyEvents(e) {
    if (!e.ctrlKey) {
      return;
    }

    switch (e.key) {
      //
      case 'k': {
        e.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
        break;
      }

      case 'b': {
        e.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }

      case 'i': {
        e.preventDefault();
        CustomEditor.toggleCursiveMark(editor);
        break;
      }

      case 's': {
        e.preventDefault();
        CustomEditor.toggleLinethroughMark(editor);
        break;
      }

      case 'u': {
        e.preventDefault();
        CustomEditor.toggleUnderlineMark(editor);
        break;
      }
    }
  }

  async function handleChange(newValue) {
    if (props.setFormData) {
      props.setFormData({ ...props.formData, [objKey]: newValue });
      setValue(newValue);
    } else {
      setValue(newValue);
    }
  }

  return (
    <div
      className={css.wrapper}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <ToolBar title={props.title} editor={editor} focus={focus} />

      <div className={`${focus ? 'sc3b' : 'pc3b'} ${css.text_wrapper}`}>
        <div className={`pc05bg ${css.text_box}`}>
          <Slate
            editor={editor}
            value={value}
            onChange={newValue => handleChange(newValue)}
          >
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={e => keyEvents(e)}
            />
          </Slate>
        </div>
      </div>
    </div>
  );
};
