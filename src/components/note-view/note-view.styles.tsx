import styled from 'styled-components';
import tw from 'twin.macro';

export const EditorWrapper = styled.div(tw`relative `);

export const NoteMeta = styled.div(tw`my-6 flex flex-col px-6`);

const titleStyling = tw`text-6xl font-black border-0
placeholder-neutral-300 focus:outline-none `;

export const TitleWrapper = styled.div(tw`grid `);

export const TitleSpacer = styled.div(
  titleStyling,
  `& {
    grid-area: 1 / 1 / 2 / 2;
    white-space: pre-wrap;
    visibility: hidden;
    overflow: hidden;
  }`
);

export const TitleInput = styled.textarea(
  titleStyling,
  tw`block resize-none overflow-hidden`,
  `& { grid-area: 1 / 1 / 2 / 2; }`
);
