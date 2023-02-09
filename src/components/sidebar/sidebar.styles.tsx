import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const SidebarContainer = styled.aside(
  tw`w-64 border-neutral-200 border-r bg-white fixed left-0 h-screen overflow-auto`
);

export const SidebarHeader = styled.div(
  tw`flex justify-center p-5 border-b border-neutral-200 flex-col`
);
