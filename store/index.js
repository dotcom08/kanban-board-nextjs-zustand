import { generateRandomId } from "@/utils";
import { create } from "zustand";

export const useNotesStore = create((set, get) => ({
  notes: [],
  createNote: (bgColor = "pink", textColor = "black") => {
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: generateRandomId(),
          title: "NoteSheet" + get().notes.length,
          body: "",
          bgColor,
          textColor,
          position: { x: 100, y: 100 },
        },
      ],
    }));
  },
  deleteNote: (noteID) => {
    set((state) => {
      console.log(noteID);

      //document.body.style.cursor = "default";

      return {
        notes: state.notes.filter((note) => note.id !== noteID),
      };
    });
  },
}));
