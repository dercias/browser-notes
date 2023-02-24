import { HiDocumentText, HiStar, HiTrash } from 'react-icons/hi';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const SidebarContainer = styled.aside(
  tw`w-64 fixed left-0 h-screen overflow-auto
  border-neutral-200 border-r
  bg-neutral-100 `
);

export const SidebarHeader = styled.div(
  tw`flex justify-center p-5 border-b border-neutral-200 flex-col`
);

export const SidebarButtons = styled.div(tw`
  flex justify-end items-center
  border-b border-neutral-200
`);

export const SidebarNav = styled.ul(tw``);

export const SidebarNavItem = styled.li(
  tw`flex items-center gap-2 py-1 mb-1
  text-neutral-700 text-sm
  hover:cursor-pointer`
);

const iconSize = '5';

export const StarIcon = styled(HiStar)(tw`
  relative text-amber-400
  w-${iconSize} h-${iconSize}`);

export const TrashIcon = styled(HiTrash)(tw`
  relative text-red-400
  w-${iconSize} h-${iconSize}`);

export const NotesIcon = styled(HiDocumentText)(tw`
  relative
  w-${iconSize} h-${iconSize}`);
