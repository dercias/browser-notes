import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const MarkdownEditorContainer = styled.div(() => [
  tw`prose lg:prose-xl focus:outline-0 mx-6`,
  `& .ProseMirror:focus-visible { outline-width: 0 }`,
]);
