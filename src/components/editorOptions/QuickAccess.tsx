import Image from "next/image";
import React, { useEffect } from "react";

import Undo from "/public/assets/rooster/editorOptions/Undo.svg";
import Redo from "/public/assets/rooster/editorOptions/Redo.svg";
import { IEditor, redo, undo } from "roosterjs";

export const QuickAccess = ({
  iEditor,
  formatState,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
  formatState: any;
}) => {
  const [undoState, setUndoState] = React.useState<string>("#848484");
  const [redoState, setRedoState] = React.useState<string>("#848484");
  useEffect(() => {
    if (formatState) {
      setUndoState(formatState.canUndo ? "#232325" : "#848484");
      setRedoState(formatState.canRedo ? "#232325" : "#848484");
    }
  }, [formatState]);
  return (
    <>
      <button
        className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          undo(iEditor.current!);
        }}
      >
        <svg
          width="16"
          height="6"
          viewBox="0 0 16 6"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5842 5.35637C14.9931 3.76495 14.0116 2.48661 12.6395 1.52134C11.2674 0.556064 9.72929 0.0678354 8.02514 0.056653C6.88487 0.0491707 5.80264 0.267074 4.77845 0.710363C3.75426 1.15365 2.85102 1.78524 2.06871 2.60512L2.08569 0.0176793L0.582031 0.0078125L0.547582 5.2577L5.81039 5.29223L5.82023 3.79227L3.03846 3.77401C3.68219 3.06572 4.43452 2.51752 5.29544 2.12941C6.15636 1.7413 7.06298 1.55037 8.0153 1.55662C9.29341 1.56501 10.4659 1.91021 11.5329 2.59222C12.5998 3.27424 13.4051 4.19204 13.9489 5.34564L15.5842 5.35637Z"
            fill={undoState}
          />
        </svg>
      </button>
      <button
        className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          redo(iEditor.current!);
        }}
      >
        <svg
          width="16"
          height="6"
          viewBox="0 0 16 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.58152 5.36864C1.16997 3.77682 2.1482 2.4978 3.51621 1.53159C4.88423 0.565369 6.41821 0.0760823 8.11817 0.0637274C9.25563 0.0554605 10.3354 0.272619 11.3574 0.715204C12.3794 1.15779 13.2808 1.78875 14.0618 2.6081L14.043 0.020667L15.543 0.00976562L15.5811 5.25963L10.3313 5.29778L10.3204 3.79782L13.0953 3.77765C12.4526 3.06981 11.7018 2.52212 10.8427 2.13461C9.98357 1.74709 9.07904 1.55678 8.12907 1.56369C6.8541 1.57295 5.68471 1.91896 4.62089 2.60171C3.55708 3.28446 2.75435 4.20282 2.21273 5.35679L0.58152 5.36864Z"
            fill={redoState}
          />
        </svg>
      </button>
    </>
  );
};
