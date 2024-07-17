import Image from "next/image";
import React, { useState } from "react";
import ImageIcon from "/public/assets/rooster/editorOptions/ImageIcon.svg";
import { IEditor, insertImage } from "roosterjs";
import { insertEmbed } from "@/utils/insertEmbed";

const InputLink = ({
  iEditor,
  setShowImageOptions,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
  setShowImageOptions: (show: boolean) => void;
}) => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col gap-2 items-center mt-4 bg-custom-blue-50 p-1">
      <input
        type="text"
        placeholder="Paste link..."
        className="w-full"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button
        onClick={() => {
          insertImage(iEditor.current!, search);
          setShowImageOptions(false);
        }}
        className="text-end bg-custom-blue-primary text-white rounded-md px-2"
      >
        Apply
      </button>
    </div>
  );
};

export const EditorImage = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [showImageOptions, setShowImageOptions] = useState(false);
  return (
    <button
      onClick={() => {
        setShowImageOptions(true);
      }}
      className="h-full relative py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
    >
      <Image src={ImageIcon} alt="alignment" />

      <div
        onMouseLeave={() => {
          setShowImageOptions(false);
        }}
        className={`absolute w-32 top-3 left-0 ${
          showImageOptions ? "" : "hidden"
        }`}
      >
        <InputLink
          iEditor={iEditor}
          setShowImageOptions={setShowImageOptions}
        />
      </div>
    </button>
  );
};
