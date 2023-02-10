import { ChangeEvent, FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import { useOpenNote } from '../../hooks';
import { updateNote } from '../../store/notes';
import { MarkdownEditor } from '../markdown-editor/markdown-editor.component';
import { NoteToobar } from '../note-details-toolbar/note-toolbar.component';
import {
  EditorWrapper,
  NoteMeta,
  TitleInput,
  TitleSpacer,
  TitleWrapper,
} from './note-view.styles';

export const NoteView: FC<PropsWithChildren> = ({ children }) => {
  const { openNote } = useOpenNote();
  const dispatch = useDispatch();

  const onContentChange = (value: string) => {
    if (openNote) {
      dispatch(updateNote({ ...openNote, content: value }));
    }
  };

  const onTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (openNote) {
      dispatch(
        updateNote({
          ...openNote,
          title: event.target.value.replace(/[\r\n\v]+/g, ''),
        })
      );
    }
  };

  return openNote ? (
    <EditorWrapper>
      <NoteToobar note={openNote} />
      <NoteMeta>
        <TitleWrapper>
          <TitleSpacer>{openNote.title}</TitleSpacer>
          <TitleInput
            rows={1}
            placeholder='Note Title'
            onChange={onTitleChange}
            value={openNote.title || ''}
          />
        </TitleWrapper>
      </NoteMeta>
      <MarkdownEditor note={openNote} onChange={onContentChange}>
        {children}
      </MarkdownEditor>
    </EditorWrapper>
  ) : (
    <>{children}</>
  );
};
