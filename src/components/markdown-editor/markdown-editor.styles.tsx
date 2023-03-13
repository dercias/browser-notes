import styled from 'styled-components/macro';
import tw, { theme } from 'twin.macro';

export const MarkdownEditorContainer = styled.div(() => [
  tw`prose xl:prose-xl lg:prose-lg
    focus:outline-0 mx-6 mt-6
    font-sans prose-h1:font-bold`,
  `
  .remirror-editor-wrapper {
    padding: 0;
  }

  .ProseMirror,
  .ProseMirror:focus {
    box-shadow: none;
    overflow: hidden;
  }

  .ProseMirror:focus-visible {
    outline-width: 0 !important;
  }

  .remirror-editor {
    padding-top: ${theme`spacing.6`};
  }

  .remirror-editor li p {
    margin: 0 !important;
  }
  .remirror-editor img + .ProseMirror-separator,
  .remirror-editor img + .ProseMirror-separator + .ProseMirror-trailingBreak
  {
    display: none !important;
  }
  `,
]);
