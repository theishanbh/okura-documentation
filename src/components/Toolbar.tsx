import Image from "next/image";
import React, { MutableRefObject } from "react";
import {
  changeFontSize,
  editTable,
  IEditor,
  insertImage,
  insertLink,
  insertTable,
  redo,
  setAlignment,
  setFontSize,
  setIndentation,
  setTextColor,
  toggleBold,
  toggleBullet,
  toggleCode,
  toggleItalic,
  toggleStrikethrough,
  toggleUnderline,
  undo,
} from "roosterjs";

import Undo from "/public/assets/rooster/editorOptions/Undo.svg";
import Redo from "/public/assets/rooster/editorOptions/Redo.svg";
import { insertEmoji } from "@/utils/insertEmoji";
import { insertEmbed } from "@/utils/insertEmbed";

export const Toolbar = ({
  iEditor,
}: {
  iEditor: MutableRefObject<IEditor | null>;
}) => {
  console.log(iEditor);
  return (
    <div className="border px-2 flex py-2 items-center border-b border-gray-custom-primary">
      {/* make a map */}
      {/* {data.map((element, index) => {
          return <Section key={index}>{element}</Section>;
        })} */}
      {/* TODO: make the below sections available */}
      <div className="flex gap-2 p-2 h-full border-r border-gray-custom-primary">
        <button
          onClick={() => {
            undo(iEditor.current!);
          }}
        >
          <Image src={Undo} alt="undo" />
        </button>
        <button
          onClick={() => {
            redo(iEditor.current!);
          }}
        >
          <Image src={Redo} alt="redo" />
        </button>
      </div>
      {/* normal text */}
      {/* font */}
      {/* size */}
      {/* bold, italic, underline, strip, text color */}
      <div className="flex gap-2 p-2 h-full border-r border-gray-custom-primary">
        <button
          onClick={() => {
            toggleBold(iEditor.current!);
          }}
        >
          bold
        </button>
        <button
          onClick={() => {
            toggleItalic(iEditor.current!);
          }}
        >
          Italic
        </button>
        <button
          onClick={() => {
            toggleUnderline(iEditor.current!);
          }}
        >
          Underline
        </button>
        <button onClick={() => toggleStrikethrough(iEditor.current!)}>
          Strike
        </button>
        <button onClick={() => setTextColor(iEditor.current!, "#d9d9d9")}>
          colo
        </button>
        <button
          onClick={() => {
            changeFontSize(iEditor.current!, "decrease");
            console.log("decrease");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            changeFontSize(iEditor.current!, "increase");
            console.log("increase");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setFontSize(iEditor.current!, "20");
          }}
        >
          set
        </button>
        <button
          onClick={() => {
            setAlignment(iEditor.current!, "center");
          }}
        >
          alignment
        </button>
        <button
          onClick={() => {
            insertImage(iEditor.current!, "https://via.placeholder.com/150");
          }}
        >
          image
        </button>
        <button
          onClick={() => {
            setIndentation(iEditor.current!, "indent");
          }}
        >
          indent
        </button>
        <button
          onClick={() => {
            insertTable(iEditor.current!, 5, 5);
          }}
        >
          table
        </button>
        <button
          onClick={() => {
            insertLink(
              iEditor.current!,
              "http://facebook.com/",
              "link",
              "server"
            );
          }}
        >
          link
        </button>
        <button
          onClick={() => {
            toggleBullet(iEditor.current!, false);
          }}
        >
          bullet
        </button>
        <button
          onClick={() => {
            toggleCode(iEditor.current!);
          }}
        >
          {"{ }"}
        </button>
        <button
          onClick={() => {
            editTable(iEditor.current!, "insertAbove");
          }}
        >
          {"insert right"}
        </button>
        <button
          onClick={() => {
            insertEmoji(iEditor.current!, "🙏");
          }}
        >
          emoji
        </button>
        <button
          onClick={() => {
            insertEmbed(iEditor.current!, "hello");
          }}
        >
          embed
        </button>
      </div>
      {/* alignment, list, alignment */}
      {/* checklist, link, code, image and what not */}
      {/* mention, reference,emoji,upscript, subscript, number, Tsf */}
      {/* search, dotted */}
    </div>
  );
};
