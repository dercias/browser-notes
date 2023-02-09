import { FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { Note, NotesContext } from '../../context';
import { MarkdownEditor } from '../markdown-editor/markdown-editor.component';
import { NoteDetailsToobar } from '../note-details-toolbar/note-details-toolbar.component';
import { EditorWrapper } from './note-view.styles';

export const NoteView: FC<PropsWithChildren> = ({ children }) => {
  const [openNote, setOpenNote] = useState<Note>();
  const { openNoteId, updateNote, notes } = useContext(NotesContext);

  const onChange = (value: string) => {
    if (openNote) {
      updateNote({
        ...openNote,
        content: value,
      });
    }
  };

  useEffect(() => {
    if (openNoteId !== openNote?.id) {
      const found = notes.find((n) => n.id === openNoteId);
      setOpenNote(found);
    }
  }, [openNoteId, setOpenNote, notes, openNote]);

  return openNote ? (
    <EditorWrapper>
      <NoteDetailsToobar note={openNote} />
      <MarkdownEditor initialContent={openNote.content} onChange={onChange}>
        {children}
      </MarkdownEditor>
    </EditorWrapper>
  ) : (
    <>{children}</>
  );
};
