import tw from 'twin.macro';
import styled from 'styled-components/macro';
import { CiImageOn } from 'react-icons/ci';

export const PopoverButton = styled.button(tw`flex px-3`);

export const PopoverButtonIcon = styled(CiImageOn)(
  tw`h-[22px] w-[22px] block text-neutral-600`
);

export const PopoverWrapper = styled.div(tw`
  absolute mt-[11px] p-4
bg-white rounded border`);
