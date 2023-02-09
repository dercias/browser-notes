import styled from 'styled-components/macro';
import tw, { theme } from 'twin.macro';

export const MarkdownEditorContainer = styled.div(() => [
  tw`prose lg:prose-xl focus:outline-0 mx-6`,
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
  `,
]);
