import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { HiDocumentText } from 'react-icons/hi';

export const NoteToolbarContainer = styled.div(
  tw`w-full py-1 flex align-middle bg-white`
);

export const Toolbar = styled.div(tw`
  w-full flex justify-between`);

export const ToolbarStart = styled.div(tw`
  flex items-center
  text-sm text-neutral-500`);

export const ToolbarEnd = styled.div(tw`flex`);

export const DocumentIcon = styled(HiDocumentText)(tw`w-5 h-5 mr-1`);
