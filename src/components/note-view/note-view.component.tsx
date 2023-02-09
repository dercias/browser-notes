import { ChangeEvent, FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import { useOpenNote } from '../../hooks';
import { updateNote } from '../../store/notes';
import { MarkdownEditor } from '../markdown-editor/markdown-editor.component';
import { NoteDetailsToobar } from '../note-details-toolbar/note-details-toolbar.component';
import { EditorWrapper, NoteMeta, TitleInput } from './note-view.styles';

export const NoteView: FC<PropsWithChildren> = ({ children }) => {
  const { openNote } = useOpenNote();
  const dispatch = useDispatch();

  const onContentChange = (value: string) => {
    if (openNote) {
      dispatch(updateNote({ ...openNote, content: value }));
    }
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (openNote) {
      dispatch(updateNote({ ...openNote, title: event.target.value }));
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
          value={openNote.title || ''}
        />
      </NoteMeta>
      <MarkdownEditor note={openNote} onChange={onContentChange}>
        {children}
      </MarkdownEditor>
    </EditorWrapper>
  ) : (
    <>{children}</>
  );
};
