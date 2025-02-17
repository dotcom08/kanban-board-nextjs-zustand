"use client";
import { useRef } from "react";
import AutoResizeTextarea from "../AutoResizeTextarea";
import { HiOutlineTrash } from "react-icons/hi";
import { useDragDrop } from "@/hooks/useDragDrop";
import { useNotesStore } from "@/store";

export default function NoteSheet({ note }) {
  const noteRef = useRef(null);
  const { isDragging, initialPosition, handleOnMouseDown } = useDragDrop(
    noteRef,
    note.position
  );
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <div
      ref={noteRef}
      onMouseDown={handleOnMouseDown}
      style={{
        position: "absolute",
        left: initialPosition.x,
        top: initialPosition.y,
        zIndex: isDragging ? 999 : 1,
        backgroundColor: note.bgColor,
        color: note.textColor,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className={`select-none flex flex-col items-start gap-3 justify-center  rounded-lg p-4 w-[350px] `}
    >
      <div className="w-full h-full relative">
        <div
          onClick={() => deleteNote(note.id)}
          className="absolute top-0 right-1 cursor-pointer"
        >
          <HiOutlineTrash className="text-2xl" />
        </div>

        <div>
          <p>{note.title}</p>
        </div>

        <AutoResizeTextarea />
      </div>
    </div>
  );
}
