import styled from 'styled-components/macro';
import tw, { theme } from 'twin.macro';

export const MarkdownEditorToolbarContainer = styled.div(() => [
  tw`flex sticky top-0 w-full h-12 px-6 py-2
      bg-white
     border-neutral-200 border-b`,
  `
  > div {
    flex: 1
  }

  .MuiButtonBase-root {
    background: transparent;
    color: ${theme`colors.neutral.500`};

    &,
    &.Mui-disabled {
      border: 0;
      border-radius: 0;
    }

    &.Mui-focusVisible,
    &:hover {
      background: transparent;
    }

    &.Mui-selected,
    &.Mui-selected:hover {
      background: transparent;
      color: ${theme`colors.blue.600`};
    }
  }

  .MuiDivider-root {
    border-color: ${theme`colors.neutral.200`};
    margin: 3px ${theme`spacing.2`};
  }

  .MuiTouchRipple-root {
    visibility: hidden;
  }
`,
]);
