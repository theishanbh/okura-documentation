import React, { MutableRefObject, RefObject, useEffect, useState } from "react";
import { exportContent, IEditor } from "roosterjs";

export const MyEditor = ({
  editorDivRef,
}: {
  editorDivRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  console.log(editorDivRef);
  return (
    <>
      <div
        ref={editorDivRef}
        className="border p-5 border-gray-300 rounded-lg min-h-[200px]"
      />
    </>
  );
};
