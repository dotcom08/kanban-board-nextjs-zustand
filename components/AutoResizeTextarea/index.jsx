"use client";
import { useState, useRef } from "react";

const AutoResizeTextarea = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);

    const handleOnChange = (e) => {
        setText(e.target.value);

        // Ajuste dynamiquement la hauteur
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <textarea
            ref={textareaRef}
            value={text}
            onChange={handleOnChange}
            className="w-full min-h-[50px] p-2 bg-transparent resize-none overflow-hidden focus:outline-none"
            placeholder="Écris ici..."
        />


    );
};

export default AutoResizeTextarea;
