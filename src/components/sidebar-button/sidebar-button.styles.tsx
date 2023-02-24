import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const StyledButton = styled.button(tw`
  px-4 py-2 flex gap-1 items-center
  bg-transparent
  text-neutral-700
  transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600
`);
