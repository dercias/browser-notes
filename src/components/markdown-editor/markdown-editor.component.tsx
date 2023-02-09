import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import jsx from 'refractor/lang/jsx.js';
import typescript from 'refractor/lang/typescript.js';
import { ExtensionPriority } from 'remirror';
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CodeBlockExtension,
  CodeExtension,
  HardBreakExtension,
  HeadingExtension,
  ItalicExtension,
  LinkExtension,
  ListItemExtension,
  MarkdownExtension,
  OrderedListExtension,
  PlaceholderExtension,
  StrikeExtension,
  TableExtension,
  TrailingNodeExtension,
} from 'remirror/extensions';
import {
  EditorComponent,
  Remirror,
  ThemeProvider,
  useDocChanged,
  useHelpers,
  useRemirror,
} from '@remirror/react';
// import 'remirror/styles/all.css';
import { MarkdownEditorProps as RemirrorMarkdownEditorProps } from '@remirror/react-editors/markdown';

import { MarkdownEditorContainer } from './markdown-editor.styles';
import { MarkdownEditorToolbar } from '../markdown-editor-toolbar/markdown-editor-toolbar.component';
import { Note } from '../../store/notes';

export interface OnChangeMarkdownProps {
  onChange: (markdown: string) => void;
}

const OnChangeMarkdown = ({ onChange }: OnChangeMarkdownProps): null => {
  const { getMarkdown } = useHelpers();

  useDocChanged(
    useCallback(
      ({ state }) => {
        const markdown = getMarkdown(state);
        onChange(markdown);
      },
      [onChange, getMarkdown]
    )
  );

  return null;
};

export type MarkdownEditorProps = {
  content?: string;
  note?: Note;
  onChange?: (value: string) => void;
} & RemirrorMarkdownEditorProps;

export const MarkdownEditor: FC<PropsWithChildren<MarkdownEditorProps>> = ({
  placeholder = 'Start typing...',
  children,
  content = '',
  autoFocus = true,
  onChange = () => {},
  note,
  ...rest
}) => {
  const [openNote, setOpenNote] = useState<Note | undefined>();

  const extensions = useCallback(
    () => [
      new PlaceholderExtension({ placeholder }),
      new LinkExtension({ autoLink: true }),
      new BoldExtension(),
      new StrikeExtension(),
      new ItalicExtension(),
      new HeadingExtension(),
      new LinkExtension(),
      new BlockquoteExtension(),
      new BulletListExtension({ enableSpine: true }),
      new OrderedListExtension(),
      new ListItemExtension({
        priority: ExtensionPriority.High,
        enableCollapsible: true,
      }),
      new CodeExtension(),
      new CodeBlockExtension({ supportedLanguages: [jsx, typescript] }),
      new TrailingNodeExtension(),
      new TableExtension(),
      new MarkdownExtension({ copyAsMarkdown: false }),
      /**
       * `HardBreakExtension` allows us to create a newline inside paragraphs.
       * e.g. in a list item
       */
      new HardBreakExtension(),
    ],
    [placeholder]
  );

  const { manager } = useRemirror({
    extensions,
    stringHandler: 'markdown',
  });

  const onChangeHandler = (value: string) => {
    onChange(value);
  };

  useEffect(() => {
    if (openNote?.id !== note?.id) {
      setOpenNote(note);
      manager.view.updateState(
        manager.createState({ content: note?.content as string })
      );
    }
  }, [note, openNote, manager]);

  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        autoFocus={autoFocus}
        label='content'
        placeholder={placeholder}
        {...rest}
      >
        <MarkdownEditorToolbar />
        <MarkdownEditorContainer>
          <EditorComponent />
        </MarkdownEditorContainer>
        <OnChangeMarkdown onChange={onChangeHandler} />
        {children}
      </Remirror>
    </ThemeProvider>
  );
};
