import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const NoteToolbarContainer = styled.div(
  tw`w-full h-10 flex align-middle bg-white`
);

export const Toolbar = styled.div(tw`w-full px-10 flex justify-between`);

export const ToolbarStart = styled.div(tw`h-full `);

export const ToolbarEnd = styled.div(tw`flex align-middle h-full `);
