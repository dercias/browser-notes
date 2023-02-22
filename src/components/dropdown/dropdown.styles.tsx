import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const DropdownButton = styled.button(tw`
  px-6 pt-2.5 pb-2 bg-none text-left `);

export const DropdownIcon = styled(HiOutlineDotsHorizontal)(
  tw`text-neutral-600 w-5 h-5`
);

export const DropdownList = styled.ul(tw`
  absolute z-[1000] m-0 float-left min-w-max
  overflow-hidden
  list-none border-neutral-50 border
  bg-white shadow-lg
  text-left text-base
  hidden [&[data-te-dropdown-show]]:block`);

export const DropdownOptionButton = styled.button(tw`
  flex items-center w-full py-2 px-4
  bg-transparent  hover:bg-neutral-100
  text-sm font-normal text-neutral-700 font-mono whitespace-nowrap
  active:text-neutral-800 active:no-underline
  disabled:pointer-events-none
  disabled:bg-transparent disabled:text-neutral-400
  dark:text-neutral-200 dark:hover:bg-neutral-600`);
