import tw from 'twin.macro';
import styled from 'styled-components/macro';
import { CiImageOn } from 'react-icons/ci';
import { RiImageAddLine } from 'react-icons/ri';

export const AddImageButton = styled.button(tw`flex px-3 py-1`);

export const AddImageButtonIcon = styled(CiImageOn)(
  tw`h-[22px] w-[22px] block text-neutral-600`
);

export const AddImageIcon = styled(RiImageAddLine)(tw`text-xl`);
