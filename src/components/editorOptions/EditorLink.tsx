import Image from "next/image";
import { MutableRefObject, useState } from "react";
import { IEditor, toggleUnderline } from "roosterjs";
import LinkIcon from "/public/assets/rooster/editorOptions/LinkIcon.svg";
import { insertLink } from "@/utils/insertLink";

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
          toggleUnderline(iEditor.current!);
          insertLink(iEditor.current!, search);
          setSearch("");
          setShowImageOptions(false);
        }}
        className="text-end bg-custom-blue-primary text-white rounded-md px-2"
      >
        Apply
      </button>
    </div>
  );
};

export const EditorLink = ({
  iEditor,
}: {
  iEditor: MutableRefObject<IEditor | null>;
}) => {
  const [showLinkOptions, setShowLinkOptions] = useState(false);
  return (
    <div
      onClick={() => {
        setShowLinkOptions(true);
      }}
      className="h-full relative py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
    >
      <Image src={LinkIcon} alt="alignment" />
      <div
        onMouseLeave={() => {
          setShowLinkOptions(false);
        }}
        className={`absolute w-32 top-3 left-0 ${
          showLinkOptions ? "" : "hidden"
        }`}
      >
        <InputLink iEditor={iEditor} setShowImageOptions={setShowLinkOptions} />
      </div>
    </div>
  );
};
