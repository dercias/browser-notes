import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { GoBrowser } from 'react-icons/go';

export const LogoContainer = styled.div(
  tw`flex text-blue-600  mb-10 items-center
  hover:cursor-pointer hover:text-blue-700
  transition duration-150 ease-in-out
  `
);

export const LogoIcon = styled(GoBrowser)(tw`text-4xl`);

export const LogoText = styled.span(
  tw`font-mono text-lg lowercase font-bold ml-2`
);
