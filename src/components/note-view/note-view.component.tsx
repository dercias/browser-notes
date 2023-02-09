import { ChangeEvent, FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useOpenNote } from '../../hooks';
import { updateNote } from '../../store/notes';
import { MarkdownEditor } from '../markdown-editor/markdown-editor.component';
import { NoteDetailsToobar } from '../note-details-toolbar/note-details-toolbar.component';
import { EditorWrapper, NoteMeta, TitleInput } from './note-view.styles';

export const NoteView: FC<PropsWithChildren> = ({ children }) => {
  const { openNote } = useOpenNote();
  const [note, setNote] = useState(openNote);
  const dispatch = useDispatch();

  useEffect(() => {
    if (note?.id !== openNote?.id) {
      setNote(openNote);
    }
  }, [openNote, note]);

  const onContentChange = (value: string) => {
    if (note) {
      dispatch(updateNote({ ...note, content: value }));
    }
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (note) {
      dispatch(updateNote({ ...note, title: event.target.value }));
    }
  };

  return note ? (
    <EditorWrapper>
      <NoteDetailsToobar note={note} />
      <NoteMeta>
        <TitleInput
          placeholder='Note Title'
          type='text'
          onChange={onTitleChange}
          value={note.title || ''}
        />
      </NoteMeta>
      <MarkdownEditor initialContent={note.content} onChange={onContentChange}>
        {children}
      </MarkdownEditor>
    </EditorWrapper>
  ) : (
    <>{children}</>
  );
};
