import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const NoteDetailsToolbarContainer = styled.div(
  tw`w-full h-10 px-10 flex align-middle
    border-neutral-200 border-b bg-white`
);

export const Toolbar = styled.div(tw`max-w-prose block w-full`);

export const ToolbarEnd = styled.div(tw`float-right flex align-middle h-full `);
