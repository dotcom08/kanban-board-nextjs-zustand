import { FaPlus } from "react-icons/fa";
import ColorCommand from "../ColorCommand";
import { useNotesStore } from "@/store";

export default function ControlCommand() {

    const addNote = useNotesStore(state => state.createNote);

  return (
    <div className="absolute top-1/2 left-4 -translate-y-1/2  rounded-full bg-slate-500 p-2 flex flex-col gap-2 items-center justify-center">
      <button onClick={addNote} className="p-2 rounded-full bg-black text-white">
        <FaPlus className="" size={20} />
      </button>
      {["red", "blue", "green", "yellow"].map((color, index) => {
        return <ColorCommand key={index} color={color} />;
      })}
    </div>
  );
}
