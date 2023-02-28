import { HiX } from 'react-icons/hi';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const InputContainer = styled.div(
  tw`w-full mx-2 rounded flex bg-white `
);

export const Input = styled.input(
  tw`w-full pr-1 pl-2 text-sm text-neutral-500 leading-relaxed bg-transparent
  focus:outline-none focus:ring-0`
);

export const ClearButton = styled.button(tw`px-1 text-neutral-300`);

export const CloseIcon = styled(HiX)(tw``);
