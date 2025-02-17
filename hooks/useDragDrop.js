"use client";

import { useState, useCallback , useEffect} from "react";
import { useNotesStore } from "@/store";

export const useDragDrop = (ref, initialPosition) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({
    x: initialPosition.x,
    y: initialPosition.y,
  });


  const handleOnMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      const react = ref.current.getBoundingClientRect();

      const offsetX = e.clientX - react.left;
      const offsetY = e.clientY - react.top;

      setOffset({ x: offsetX, y: offsetY });
    },
    [isDragging]
  );

  const handleOnMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      const maxX = window.innerWidth - ref.current.offsetWidth;
      const maxY = window.innerHeight - ref.current.offsetHeight;

      setPosition({
        x: Math.max(0, Math.min(maxX, newX)),
        y: Math.max(0, Math.min(maxY, newY)),
      });
    },
    [isDragging, offset]
  );

  const handleOnMouseUp = useCallback(() => {
    setIsDragging(false);
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleOnMouseMove);
      window.addEventListener("mouseup", handleOnMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleOnMouseMove);
      window.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [isDragging, handleOnMouseMove, handleOnMouseUp]);


  return { isDragging, position, handleOnMouseDown };
};
