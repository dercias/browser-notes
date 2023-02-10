import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { HiDocumentText } from 'react-icons/hi';

type ItemContainerProps = {
  active: boolean;
};

export const ItemContainer = styled.li<ItemContainerProps>(({ active }) => [
  tw`flex flex-row p-2 mb-1
  leading-5 text-neutral-800
  rounded-md
  hover:cursor-pointer `,
  active && tw`bg-neutral-200`,
]);

export const Text = styled.div(tw`flex-1 px-2 text-sm truncate`);

export const Icon = styled(HiDocumentText)(tw`text-neutral-400 text-xl `);
