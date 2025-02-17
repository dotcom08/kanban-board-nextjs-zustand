"use client";
import { useNotesStore } from "@/store";

export default function ColorCommand({ color }) {
  const addNote = useNotesStore((state) => state.createNote);

  return (
    <button
      onClick={() => addNote(color, "black")}
      style={{ backgroundColor: color }}
      className="p-5 rounded-full bg-black text-white"
    ></button>
  );
}
