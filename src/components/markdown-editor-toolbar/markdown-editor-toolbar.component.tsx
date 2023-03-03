import {
  CommandButtonGroup,
  ToggleBoldButton,
  ToggleItalicButton,
  HistoryButtonGroup,
  ToggleStrikeButton,
  ToggleCodeButton,
  VerticalDivider,
  HeadingLevelButtonGroup,
  ToggleBlockquoteButton,
  ToggleCodeBlockButton,
  Toolbar,
} from '@remirror/react';
import { MarkdownEditorToolbarContainer } from './markdown-editor-toolbar.styles';
// import { ImageButton } from '../image-button/image-button.component';

export const MarkdownEditorToolbar = () => {
  return (
    <MarkdownEditorToolbarContainer>
      <Toolbar>
        <CommandButtonGroup>
          <ToggleBoldButton />
          <ToggleItalicButton />
          <ToggleStrikeButton />
          <ToggleCodeButton />
        </CommandButtonGroup>
        <VerticalDivider />
        <HeadingLevelButtonGroup showAll />
        <VerticalDivider />
        <CommandButtonGroup>
          <ToggleBlockquoteButton />
          <ToggleCodeBlockButton />
        </CommandButtonGroup>
        <VerticalDivider />
        <HistoryButtonGroup />
        {/* <ImageButton /> */}
      </Toolbar>
    </MarkdownEditorToolbarContainer>
  );
};
