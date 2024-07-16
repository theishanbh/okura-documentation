import Image from "next/image";
import React, { MutableRefObject, useEffect, useState } from "react";
import {
  changeFontSize,
  Editor,
  editTable,
  getFormatState,
  IEditor,
  insertImage,
  insertLink,
  insertTable,
  redo,
  setAlignment,
  setFontName,
  setFontSize,
  setIndentation,
  setTextColor,
  toggleBlockQuote,
  toggleBold,
  toggleCode,
  toggleItalic,
  toggleStrikethrough,
  toggleSubscript,
  toggleSuperscript,
  toggleUnderline,
  undo,
} from "roosterjs";

import { insertEmoji } from "@/utils/insertEmoji";
import { insertEmbed } from "@/utils/insertEmbed";
import DropDown from "./editorOptions/DropDown";

// svg import
import Undo from "/public/assets/rooster/editorOptions/Undo.svg";
import Redo from "/public/assets/rooster/editorOptions/Redo.svg";
import Alignment from "/public/assets/rooster/editorOptions/Alignment.svg";
import BulletList from "/public/assets/rooster/editorOptions/BulletList.svg";
import CheckBox from "/public/assets/rooster/editorOptions/CheckBox.svg";
import Comment from "/public/assets/rooster/editorOptions/Comment.svg";
import Emoji from "/public/assets/rooster/editorOptions/Emoji.svg";
import FormatClear from "/public/assets/rooster/editorOptions/FormatClear.svg";
import ImageIcon from "/public/assets/rooster/editorOptions/ImageIcon.svg";
import IndentDecrease from "/public/assets/rooster/editorOptions/IndentDecrease.svg";
import IndentIncrease from "/public/assets/rooster/editorOptions/IndentIncrease.svg";
import LinkIcon from "/public/assets/rooster/editorOptions/LinkIcon.svg";
import Quote from "/public/assets/rooster/editorOptions/Quote.svg";
import Subscript from "/public/assets/rooster/editorOptions/Subscript.svg";
import Superscript from "/public/assets/rooster/editorOptions/Superscript.svg";
import Table from "/public/assets/rooster/editorOptions/Table.svg";
import Video from "/public/assets/rooster/editorOptions/Video.svg";
import { QuickAccess } from "./editorOptions/QuickAccess";
import FontSize from "./editorOptions/FontSize";
import { QuickChange } from "./editorOptions/QuickChange";
import EditorAlignment from "./editorOptions/EditorAlignment";
import { EditorEmoji } from "./editorOptions/EditorEmoji";
import {
  createRibbonPlugin,
  decreaseFontSizeButton,
  Ribbon,
  Rooster,
  undoButton,
} from "roosterjs-react";
import EditorComment from "./editorOptions/EditorComment";
import { toggleBullet } from "@/utils/toggleBullet";

export const Toolbar = ({
  iEditor,
  formatState,
}: {
  iEditor: MutableRefObject<IEditor | null>;
  formatState: any;
}) => {
  // useeffect for font
  const [font, setFont] = React.useState("Arial");

  useEffect(() => {
    if (iEditor.current) {
      setFontName(iEditor.current, font);
    }
  }, [iEditor, font]);

  const ribbonPlugin = createRibbonPlugin();

  const [fontsize, setFontsize] = useState("12 pt");
  return (
    <div className="border px-2 py-2 flex items-center border-b border-custom-gray-primary">
      <div className="flex h-full pr-1 border-r border-custom-gray-primary">
        <QuickAccess iEditor={iEditor} />
      </div>
      {/* normal text */}
      <div className="flex px-1 border-r border-custom-gray-primary">
        <DropDown font={font} handleFont={setFont} />
      </div>
      <div className="flex items-center px-1 justify-center border-r border-custom-gray-primary">
        <FontSize
          iEditor={iEditor}
          fontsize={fontsize}
          setFontsize={setFontsize}
        />
      </div>
      {/* font */}
      {/* size */}
      {/* bold, italic, underline, strip, text color */}
      <div className="flex items-center gap-2 px-1 justify-center border-r border-custom-gray-primary">
        <QuickChange iEditor={iEditor} />
      </div>
      <div className="flex items-center gap-2 px-2 justify-center border-r border-custom-gray-primary">
        <EditorAlignment iEditor={iEditor} />
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleBullet(iEditor.current!, true);
          }}
        >
          <Image src={BulletList} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setIndentation(iEditor.current!, "indent");
          }}
        >
          <Image src={IndentIncrease} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setIndentation(iEditor.current!, "outdent");
          }}
        >
          <Image src={IndentDecrease} alt="alignment" />
        </button>
      </div>
      <div className="flex items-center gap-2 px-2 justify-center border-r border-custom-gray-primary">
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setAlignment(iEditor.current!, "center");
          }}
        >
          <Image src={CheckBox} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setAlignment(iEditor.current!, "center");
          }}
        >
          <Image src={LinkIcon} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setAlignment(iEditor.current!, "center");
          }}
        >
          <Image src={ImageIcon} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            insertEmbed(iEditor.current!, "");
          }}
        >
          <Image src={Video} alt="alignment" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            setAlignment(iEditor.current!, "center");
          }}
        >
          <Image src={Table} alt="alignment" />
        </button>
        <button
          className="py-1 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleCode(iEditor.current!);
          }}
        >
          {"{ }"}
        </button>
      </div>
      <div className="flex items-center gap-2 px-2 justify-center pr-1 border-r border-custom-gray-primary">
        <button
          className="font-bold px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleBold(iEditor.current!);
          }}
        >
          @
        </button>
        <EditorComment iEditor={iEditor} />
        <EditorEmoji iEditor={iEditor} />
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleSubscript(iEditor.current!);
          }}
        >
          <Image src={Subscript} alt="subscript" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleSuperscript(iEditor.current!);
          }}
        >
          <Image src={Superscript} alt="superscript" />
        </button>
        <button
          className="h-full py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
          onClick={() => {
            toggleBlockQuote(iEditor.current!);
          }}
        >
          <Image src={Quote} alt="quote" />
        </button>
      </div>
      {/* alignment, list, alignment */}
      {/* checklist, link, code, image and what not */}
      {/* mention, reference,emoji,upscript, subscript, number, Tsf */}
      {/* search, dotted */}
    </div>
  );
};
