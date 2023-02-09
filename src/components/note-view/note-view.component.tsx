import { ChangeEvent, FC, PropsWithChildren, useContext } from 'react';

import { NotesContext } from '../../context';
import { useOpenNote } from '../../hooks';
import { MarkdownEditor } from '../markdown-editor/markdown-editor.component';
import { NoteDetailsToobar } from '../note-details-toolbar/note-details-toolbar.component';
import { EditorWrapper, NoteMeta, TitleInput } from './note-view.styles';

export const NoteView: FC<PropsWithChildren> = ({ children }) => {
  const { updateNote } = useContext(NotesContext);
  const { openNote } = useOpenNote();

  const onContentChange = (value: string) => {
    if (openNote) {
      updateNote({
        ...openNote,
        content: value,
      });
    }
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (openNote) {
      updateNote({
        ...openNote,
        title: event.target.value,
      });
    }
  };

  return openNote ? (
    <EditorWrapper>
      <NoteDetailsToobar note={openNote} />
      <NoteMeta>
        <TitleInput
          placeholder='Note Title'
          type='text'
          onChange={onTitleChange}
          value={openNote.title}
        />
      </NoteMeta>
      <MarkdownEditor
        initialContent={openNote.content}
        onChange={onContentChange}
      >
        {children}
      </MarkdownEditor>
    </EditorWrapper>
  ) : (
    <>{children}</>
  );
};
