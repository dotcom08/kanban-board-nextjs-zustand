"use client";
import { useNotesStore } from "@/store";
import NoteSheet from "../NoteSheet";
import ControlCommand from "../ControlCommand";

export default function Board() {
  const notes = useNotesStore((state) => state.notes);


  return (
    <div className="relative w-full h-full bg-gradient-to-r from-slate-200 via-zinc-200 to-purple-100">
        
      {notes.map((note) => {
        return <NoteSheet key={note.id} note={note} />;
      })}
      <ControlCommand />
    </div>
  );
}
