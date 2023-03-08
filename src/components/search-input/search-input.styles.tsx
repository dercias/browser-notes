import { HiX } from 'react-icons/hi';
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { Input } from '../input';

export const InputContainer = styled.div(tw`w-full m-2 rounded flex bg-white `);

export const StyledInput = styled(Input)(
  tw`h-7 border-0 focus:ring-0 focus:ring-offset-0 rounded-none`
);

export const ClearButton = styled.button(tw`px-1 text-neutral-300`);

export const CloseIcon = styled(HiX)(tw``);
