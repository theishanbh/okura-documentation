import React from "react";
import {
  IEditor,
  setTextColor,
  toggleBold,
  toggleItalic,
  toggleStrikethrough,
  toggleUnderline,
} from "roosterjs";

export const QuickChange = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  return (
    <>
      <button
        className="font-bold px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          toggleBold(iEditor.current!);
        }}
      >
        B
      </button>
      <button
        className=" italic font-mono px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          toggleItalic(iEditor.current!);
        }}
      >
        I
      </button>
      <button
        className=" underline px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          toggleUnderline(iEditor.current!);
        }}
      >
        U
      </button>
      <button
        className="px-1 line-through hover:bg-custom-blue-50 rounded-sm"
        onClick={() => toggleStrikethrough(iEditor.current!)}
      >
        Aa
      </button>
      <button
        className="px-1 underline decoration-red-600 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => setTextColor(iEditor.current!, "#d9d9d9")}
      >
        A
      </button>
    </>
  );
};
