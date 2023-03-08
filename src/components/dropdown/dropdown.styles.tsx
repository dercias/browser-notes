import styled from 'styled-components/macro';
import tw from 'twin.macro';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const DropdownMenuRoot = styled(DropdownMenu.Root)(tw``);

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)(tw``);

export const DropdownMenuPortal = styled(DropdownMenu.Portal)(tw``);

export const DropdownMenuContent = styled(DropdownMenu.Content)(
  tw`min-w-[220px] bg-white rounded-md p-[5px]
  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]
  will-change-[opacity,transform]
  data-[side=top]:animate-slideDownAndFade
  data-[side=right]:animate-slideLeftAndFade
  data-[side=bottom]:animate-slideUpAndFade
  data-[side=left]:animate-slideRightAndFade`
);

export const DropdownMenuItem = styled(DropdownMenu.Item)(
  tw`text-[13px] leading-none text-neutral-700 rounded-[3px]
  flex items-center h-[25px] px-[5px] relative pl-[25px]
  select-none outline-none
  data-[disabled]:text-neutral-400
  data-[disabled]:pointer-events-none
  data-[highlighted]:bg-neutral-300
  data-[highlighted]:text-neutral-800`
);
