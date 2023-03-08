import tw from 'twin.macro';
import styled from 'styled-components/macro';
import * as Popover from '@radix-ui/react-popover';

export const PopoverRoot = styled(Popover.Root)(tw``);

export const PopoverTrigger = styled(Popover.Trigger)(tw``);

export const PopoverAnchor = styled(Popover.Anchor)(tw``);

export const PopoverPortal = styled(Popover.Portal)(tw``);

export const PopoverContent = styled(Popover.Content)(
  tw`rounded p-5 w-[260px] bg-white
  shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)]
  will-change-[transform,opacity]
  data-[state=open]:data-[side=top]:animate-slideDownAndFade
  data-[state=open]:data-[side=right]:animate-slideLeftAndFade
  data-[state=open]:data-[side=bottom]:animate-slideUpAndFade
  data-[state=open]:data-[side=left]:animate-slideRightAndFade`
);

export const PopoverArrow = styled(Popover.Arrow)(tw`fill-white`);

export const PopoverClose = styled(Popover.Close)(
  tw`rounded-full h-[25px] w-[25px] inline-flex items-center justify-center
  text-neutral-500 absolute top-[5px] right-[5px] hover:text-neutral-800
  focus:shadow-[0_0_0_2px] focus:shadow-blue-500 outline-none cursor-default`
);
