import Image from "next/image";
import React from "react";

import Undo from "../../assets/rooster/editorOptions/Undo.svg";
import Redo from "../../assets/rooster/editorOptions/Redo.svg";

export const QuickAccess = () => {
  return (
    <>
      <button>
        <Image src={Undo} alt="undo" />
      </button>
      <button>
        <Image src={Redo} alt="redo" />
      </button>
    </>
  );
};
