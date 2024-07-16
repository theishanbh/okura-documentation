import Image from "next/image";
import { useState } from "react";
import { IEditor, setAlignment } from "roosterjs";

import LeftAlignment from "/public/assets/rooster/editorOptions/LeftAlignment.svg";
import RightAlignment from "/public/assets/rooster/editorOptions/RightAlignment.svg";
import JustifyAlignment from "/public/assets/rooster/editorOptions/JustifyAlignment.svg";
import CenterAlignment from "/public/assets/rooster/editorOptions/CenterAlignment.svg";

const EditorAlignment = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [showAlignmentOptions, setShowAlignmentOptions] = useState(false);
  return (
    <div
      className="h-full relative py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
      onMouseEnter={() => {
        setShowAlignmentOptions(true);
      }}
      onMouseLeave={() => {
        setShowAlignmentOptions(false);
      }}
    >
      <Image src={LeftAlignment} alt="alignment" />
      <div
        className={`absolute bg-custom-blue-50 flex mt-2 p-1 gap-2 min-w-24 ${
          showAlignmentOptions ? "" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setAlignment(iEditor.current!, "left");
            console.log("left");
          }}
        >
          <Image src={LeftAlignment} alt="alignment" />
        </button>
        <button
          onClick={() => {
            setAlignment(iEditor.current!, "right");
            console.log("right");
          }}
        >
          <Image src={RightAlignment} alt="alignment" />
        </button>
        <button
          onClick={() => {
            setAlignment(iEditor.current!, "center");
            console.log("center");
          }}
        >
          <Image src={CenterAlignment} alt="alignment" />
        </button>
        <button
          onClick={() => {
            setAlignment(iEditor.current!, "justify");
            console.log("justify");
          }}
        >
          <Image src={JustifyAlignment} alt="alignment" />
        </button>
      </div>
    </div>
  );
};

export default EditorAlignment;
