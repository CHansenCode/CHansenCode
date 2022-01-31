import { Editor, Transforms, Text } from 'slate';

export const CustomEditor = {
  //

  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });

    return !!match;
  },
  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  //

  isCursiveMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.cursive === true,
      universal: true,
    });

    return !!match;
  },
  toggleCursiveMark(editor) {
    const isActive = CustomEditor.isCursiveMarkActive(editor);
    Transforms.setNodes(
      editor,
      { cursive: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  //

  isUnderlineMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true,
    });

    return !!match;
  },
  toggleUnderlineMark(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  //

  isLinethroughMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.linethrough === true,
      universal: true,
    });

    return !!match;
  },
  toggleLinethroughMark(editor) {
    const isActive = CustomEditor.isLinethroughMarkActive(editor);
    Transforms.setNodes(
      editor,
      { linethrough: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  //

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    });

    return !!match;
  },
  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) },
    );
  },

  //
};
