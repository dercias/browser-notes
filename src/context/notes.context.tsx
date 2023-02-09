import {
  createContext,
  FC,
  useState,
  PropsWithChildren,
  useEffect,
} from 'react';

export type Note = {
  id: number;
  content: string;
};

type NotesContextProps = {
  openNoteId: number | null;
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  removeNote: (note: Note) => void;
  setOpenNoteId: (noteId: number | null) => void;
  createNote: (note: any) => Note | void;
};

export const NotesContext = createContext<NotesContextProps>({
  openNoteId: null,
  notes: [],
  addNote: () => {},
  removeNote: () => {},
  updateNote: () => {},
  setOpenNoteId: () => {},
  createNote: () => {},
});

const removeNoteItem = (notes: Note[], noteToRemove: Note) => {
  return notes.filter((n) => n.id !== noteToRemove.id);
};

const addNoteItem = (notes: Note[], noteToAdd: Note) => {
  const newId = 1 + notes.reduce((acc, n) => (n.id > acc ? n.id : acc), 0);

  return [...notes, { ...noteToAdd, id: newId }];
};

const updateNoteItem = (notes: Note[], noteToUpdate: Note) => {
  return notes.map((n) => (n.id === noteToUpdate.id ? noteToUpdate : n));
};

const createNoteWithId = (notes: Note[], note: Note) => {
  const newId = 1 + notes.reduce((acc, n) => (n.id > acc ? n.id : acc), 0);

  return { ...note, id: newId };
};

export const NotesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [openNoteId, setOpenNoteId] = useState<number | null>(null);

  useEffect(() => {
    const strNotes = localStorage.getItem('bn/notes');
    const localNotes = strNotes ? JSON.parse(strNotes) : [];
    setNotes(localNotes);
  }, []);

  useEffect(() => {
    if (notes.length) {
      localStorage.setItem('bn/notes', JSON.stringify(notes));
    }
  }, [notes]);

  const removeNote = (note: Note) => {
    setNotes(removeNoteItem(notes, note));

    if (openNoteId === note.id) {
      setOpenNoteId(null);
    }
  };
  const addNote = (note: Note) => setNotes(addNoteItem(notes, note));
  const updateNote = (note: Note) => setNotes(updateNoteItem(notes, note));
  const createNote = (note: Note) => createNoteWithId(notes, note);

  const value = {
    notes,
    openNoteId,
    removeNote,
    addNote,
    updateNote,
    setOpenNoteId,
    createNote,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};