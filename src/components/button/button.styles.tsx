import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const StyledButton = styled.button(
  tw`inline-flex items-center justify-center
  px-6 py-2.5 rounded shadow-md
  focus:shadow-lg focus:outline-none focus:ring-0
  hover:shadow-lg
  active:shadow-lg
  transition duration-150 ease-in-out
  text-white font-medium text-xs leading-tight uppercase `,
  (props) =>
    props.color === 'primary' &&
    tw`
    bg-blue-600
    hover:bg-blue-700
    focus:bg-blue-700
    active:bg-blue-800
    `,
  (props) =>
    props.color === 'error' &&
    tw`
    bg-red-500
    hover:bg-red-600
    focus:bg-red-600
    active:bg-red-700
    `
);
