import tw from 'twin.macro';
import styled from 'styled-components/macro';
import * as Tabs from '@radix-ui/react-tabs';

export const TabsRoot = styled(Tabs.Root)(tw`flex flex-col`);

export const TabsList = styled(Tabs.List)(
  tw`shrink-0 flex border-b border-neutral-300`
);

export const TabsTrigger = styled(Tabs.Trigger)(
  tw`bg-white px-5 py-2 flex-1 flex items-center justify-center
  text-xs leading-none text-neutral-500 select-none
  first:rounded-tl-md
  last:rounded-tr-md
  hover:text-neutral-800 hover:cursor-pointer
  data-[state=active]:text-primary
  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]
  data-[state=active]:focus:relative
  outline-none focus:outline-0 cursor-default`
);

export const TabsContent = styled(Tabs.Content)(
  tw`grow p-2 bg-white rounded-b-md outline-none`
);
