import React, { useState, useCallback, useRef } from 'react';

import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { ToolBar } from './ToolBar';
import { CustomEditor } from './CustomEditor';
import { Leaf } from './Leaf';
import { CodeElement, DefaultElement } from './elements';

import css from './RichText.module.scss';

export const RichText = ({ ...props }) => {
  const editorRef = useRef();
  if (!editorRef.current) editorRef.current = withReact(createEditor());
  const editor = editorRef.current;

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph' }],
    },
  ]);

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

  return (
    <div className={css.wrapper}>
      <ToolBar editor={editor} />

      <div className={`pc3b ${css.text_wrapper}`}>
        <div className={`pc05bg ${css.text_box}`}>
          <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
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
