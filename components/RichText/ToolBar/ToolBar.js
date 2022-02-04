import React from 'react';

import { CustomEditor } from '../CustomEditor';

import css from './ToolBar.module.scss';

export const ToolBar = ({ editor, focus, children, ...props }) => {
  //
  async function toggleCursive(e) {
    e.preventDefault();
    CustomEditor.toggleCursiveMark(editor);
  }
  async function toggleBold(e) {
    e.preventDefault();
    CustomEditor.toggleBoldMark(editor);
  }
  async function toggleUnderscore(e) {
    e.preventDefault();
    CustomEditor.toggleUnderlineMark(editor);
  }
  async function toggleStrikethrough(e) {
    e.preventDefault();
    CustomEditor.toggleLinethroughMark(editor);
  }
  async function toggleCode(e) {
    e.preventDefault();
    CustomEditor.toggleCodeBlock(editor);
  }

  return (
    <header className={`${css.header}`}>
      <div className={css.inner_div}>
        <p className={`${css.title}${focus ? ' sc' : ''}`}>{props.title}</p>

        <div
          className={`${css.options} ${focus ? ` ${css.options_focused}` : ``}`}
        >
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
        </div>
      </div>
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
