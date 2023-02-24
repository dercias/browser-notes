import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { HiOutlineStar, HiStar } from 'react-icons/hi';

export const StyledButton = styled.button(tw``);

export const OutlineStar = styled(HiOutlineStar)(tw`
  w-6 h-6
  text-neutral-400
  hover:text-amber-400 transition-colors
  `);

export const Star = styled(HiStar)(tw`
  w-6 h-6
text-amber-400`);
