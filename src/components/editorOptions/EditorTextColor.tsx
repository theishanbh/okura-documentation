import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { IEditor, setTextColor } from "roosterjs";

import styles from "./styles.module.css";

export const EditorTextColor = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#aabbcc");

  useEffect(() => {
    if (iEditor.current) {
      setTextColor(iEditor.current, color);
    }
  }, [iEditor, color]);
  return (
    <button
      onClick={() => setShowColorPicker(true)}
      className="px-1 relative underline decoration-red-600 hover:bg-custom-blue-50 rounded-sm"
    >
      A
      <div
        className={`absolute top-8 border border-black ${
          showColorPicker ? "" : "hidden"
        }`}
        onMouseLeave={() => setShowColorPicker(false)}
      >
        <HexColorPicker color={color} onChange={setColor} />
        <HexColorInput color={color} onChange={setColor} />
      </div>
    </button>
  );
};
