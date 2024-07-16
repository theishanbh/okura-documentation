import Image from "next/image";
import React from "react";

import Undo from "/public/assets/rooster/editorOptions/Undo.svg";
import Redo from "/public/assets/rooster/editorOptions/Redo.svg";
import { IEditor, redo, undo } from "roosterjs";

export const QuickAccess = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  return (
    <>
      <button
        className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          undo(iEditor.current!);
        }}
      >
        <Image src={Undo} alt="undo" />
      </button>
      <button
        className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          redo(iEditor.current!);
        }}
      >
        <Image src={Redo} alt="redo" />
      </button>
    </>
  );
};
