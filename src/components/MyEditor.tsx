import React, { MutableRefObject, RefObject, useEffect, useState } from "react";
import { exportContent, getFormatState, IEditor } from "roosterjs";

export const MyEditor = ({
  editorDivRef,
  formatState,
  setFormatState,
  iEditor,
}: {
  editorDivRef: MutableRefObject<HTMLDivElement | null>;
  formatState: any;
  setFormatState: React.Dispatch<React.SetStateAction<any>>;
  iEditor: MutableRefObject<IEditor | null>;
  htmlString: String;
}) => {
  return (
    <>
      <div
        ref={editorDivRef}
        onMouseUp={() => {
          if (editorDivRef.current) {
            setFormatState(getFormatState(iEditor.current!));
          }
        }}
        className="border p-5 border-gray-300 rounded-lg min-h-[200px]"
      />
    </>
  );
};
