import React from 'react';

import { CustomEditor } from '../CustomEditor';

import css from './ToolBar.module.scss';

export const ToolBar = ({ editor, children }) => {
  //
  async function toggleCursive(e) {
    CustomEditor.toggleCursiveMark(editor);
  }
  async function toggleBold(e) {
    CustomEditor.toggleBoldMark(editor);
  }
  async function toggleUnderscore(e) {
    CustomEditor.toggleUnderlineMark(editor);
  }
  async function toggleStrikethrough(e) {
    CustomEditor.toggleLinethroughMark(editor);
  }
  async function toggleCode(e) {
    CustomEditor.toggleCodeBlock(editor);
  }

  return (
    <header className={`pc5b ${css.header}`}>
      <p className={css.title}>Text editor</p>

      <div className={css.classic}>
        <Button onClick={e => toggleBold(e)}>
          <b>b</b>
        </Button>
        <Button onClick={e => toggleCursive(e)}>
          <i>h</i>
        </Button>
        <Button onClick={e => toggleUnderscore(e)}>
          <u>u</u>
        </Button>
        <Button onClick={e => toggleStrikethrough(e)}>
          <s>s</s>
        </Button>
      </div>

      <div className={css.blocks}>
        <Button onClick={e => toggleCode(e)}>code</Button>
      </div>

      <div>{children}</div>
    </header>
  );
};

const Button = ({ className, ...props }) => {
  return (
    <button
      className={`bg pc3b ${css.button}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {props.text && props.text}
      {props.children}
    </button>
  );
};
