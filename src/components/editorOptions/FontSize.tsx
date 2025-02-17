import React from "react";
import {
  changeFontSize,
  getFormatState,
  IEditor,
  setFontSize,
} from "roosterjs";

export default function FontSize({
  iEditor,
  fontsize,
  setFontsize,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
  fontsize: string;
  setFontsize: React.Dispatch<React.SetStateAction<string>>;
}) {
  const extractNumber = (str: String) => {
    const match = str.match(/\d+/);
    return match ? match[0] : null;
  };
  return (
    <div>
      <button
        onClick={() => {
          setFontsize(getFormatState(iEditor.current!).fontSize || "12pt");
          changeFontSize(iEditor.current!, "decrease");
        }}
        className="px-1"
      >
        -
      </button>
      <input
        type="input"
        value={extractNumber(fontsize) || "12"}
        className="w-8 border border-custom-blue-secondary text-center py-1 text-xs bg-custom-blue-50 mx-1 rounded-md"
      />
      <button
        onClick={() => {
          setFontsize(getFormatState(iEditor.current!).fontSize || "12pt");
          changeFontSize(iEditor.current!, "increase");
        }}
        className="px-1"
      >
        +
      </button>
    </div>
  );
}
