import React from "react";
import {
  IEditor,
  setTextColor,
  toggleBold,
  toggleItalic,
  toggleStrikethrough,
  toggleUnderline,
} from "roosterjs";
import { EditorTextColor } from "./EditorTextColor";

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
      <EditorTextColor iEditor={iEditor} />
    </>
  );
};
