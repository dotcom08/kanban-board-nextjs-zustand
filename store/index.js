import { generateRandomId } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNotesStore = create(
  persist(
    (set, get) => ({
      notes: [],
      createNote: (bgColor = "pink", textColor = "black") => {
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: generateRandomId(),
              title: "NoteSheet" + (get().notes.length + 1),
              body: "",
              bgColor: bgColor || "pink",
              textColor: textColor,
              position: { x: 100, y: 100 },
            },
          ],
        }));
      },
      deleteNote: (noteID) => {
        set((state) => {
          console.log(noteID);
          return {
            notes: state.notes.filter((note) => note.id !== noteID),
          };
        });
      },

      updateNote: (noteID, body) => {
        set((state) => {

          return {
            notes: state.notes.map((note) => {
              if (note.id === noteID) {
                return {
                  ...note,
                  body: body,
                };
              }
              return note;
            }),
          };
        });
      },

      updatePosition: (noteID, position) => {
        set((state) => {
          return {
            notes: state.notes.map((note) => {
              if (note.id === noteID) {
                console.log("updating position : ", noteID);

                return {
                  ...note,
                  position: position,
                };
              }
              return note;
            }),
          };
        });
      },
    }),
    {
      name: "notes",
      getStorage: () => localStorage,
    }
  )
);
