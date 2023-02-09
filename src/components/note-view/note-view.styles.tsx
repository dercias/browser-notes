import styled from 'styled-components';
import tw from 'twin.macro';

export const EditorWrapper = styled.div(tw`relative `);

export const NoteMeta = styled.div(tw`my-6 flex flex-col px-6`);

export const TitleInput = styled.input(
  tw`block text-6xl font-black border-0 placeholder-neutral-300 focus:outline-none `
);
