"use client";

import KeyboardArrow from "/public/assets/common/KeyboardArrow.svg";
import Image from "next/image";
import { use, useEffect, useRef, useState } from "react";
import {
  createEditor,
  createModelFromHtml,
  EditorPlugin,
  getFormatState,
  HyperlinkPlugin,
  IEditor,
  ImageEditPlugin,
  TableEditPlugin,
} from "roosterjs";

import { MyEditor } from "@/components/MyEditor";
import { Toolbar } from "@/components/Toolbar";
import RoosterEditor from "@/components/RoosterEditor";
import { TestPlugin } from "@/plugins/testPlugin";
import { GetContent } from "@/components/GetContent";
import CommentPopup from "@/components/CommentPopup";
import { commentProps } from "@/types/userComment";
import { CommentPlugin } from "@/plugins/commentPlugin";

// This plugin will insert an English word when user is inputting numbers

export type formatStateType = {
  bold: boolean;
  italic: boolean;
  isUnderline: boolean;
  subscript: boolean;
  superscript: boolean;
  strikethrough: boolean;
  justifyLeft: boolean;
  justifyCenter: boolean;
  justifyRight: boolean;
  justifyFull: boolean;
  insertOrderedList: boolean;
  insertUnorderedList: boolean;
  isBlockQuote: boolean;
  isHeader: boolean;
  headerLevel: number;
  isCodeBlock: boolean;
  isBullet: boolean;
  isNumbering: boolean;
  isTable: boolean;
  isImage: boolean;
  canUnlink: boolean;
  isEditor: boolean;
  isEmoji: boolean;
  isComment: boolean;
  isVideo: boolean;
};

export default function Page() {
  const editorDivRef = useRef<HTMLDivElement | null>(null);

  const [comments, setComments] = useState<commentProps[]>([]);
  const [userComment, setUserComment] = useState<string>("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const [formatState, setFormatState] = useState<formatStateType>();

  const [htmlString, setHtmlString] = useState<String>(
    `<iframe width="100" height="315" src="https://www.youtube.com/embed/_BBVcyJ1ClA?si=cbl5JpKlPqKjyTLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );

  const iEditor = useRef<IEditor | null>(null);

  useEffect(() => {
    // console.log(formatState);
    if (iEditor.current && formatState?.isUnderline && formatState?.canUnlink) {
      setShowCommentBox(true);
    }
  }, [formatState, htmlString]);

  useEffect(() => {
    const additionalPlugins: EditorPlugin[] = [
      new ImageEditPlugin({
        borderColor: "#DB626C",
        disableRotate: true,
        minWidth: 10,
        minHeight: 10,
        disableCrop: false,
        disableSideResize: false,
        preserveRatio: false,
      }),
      new TableEditPlugin(),
      new TestPlugin(),
      // new HyperlinkPlugin(),
    ]; // TODO:

    if (editorDivRef.current) {
      iEditor.current = createEditor(
        editorDivRef.current,
        additionalPlugins,
        createModelFromHtml(String(htmlString))
      );
    }
    // return () => {
    //   iEditor.current?.dispose();
    // };
  }, [htmlString]);

  return (
    <div className="h-full w-full">
      {/* title */}
      <div className=" bg-custom-blue-50 border py-2 px-4 flex items-center justify-between border-custom-blue-secondary">
        <span className="text-sm">Title of the page</span>
        <div className=" border-l border-custom-blue-secondary">
          <Image
            className="h-6 w-6 pl-2 text-custom-black-primary"
            src={KeyboardArrow}
            alt="arrow"
          />
        </div>
      </div>
      {/* rooster editor options */}
      <Toolbar
        iEditor={iEditor!}
        formatState={formatState}
        setShowCommentBox={setShowCommentBox}
      />
      <div
        onMouseLeave={() => {
          setShowCommentBox(false);
        }}
        className={`absolute min-w-96 top-44 right-0 ${
          showCommentBox ? "" : "hidden"
        }`}
      >
        <CommentPopup
          prevComments={comments}
          handleComment={setComments}
          iEditor={iEditor}
          userComment={userComment}
          setUserComment={setUserComment}
        />
      </div>
      {/* TODO: make rooster editor */}
      <MyEditor
        editorDivRef={editorDivRef}
        formatState={formatState}
        setFormatState={setFormatState}
        iEditor={iEditor}
        htmlString={htmlString}
      />
      <GetContent
        htmlString={htmlString}
        handleHtmlString={setHtmlString}
        iEditor={iEditor}
      />
      {/* <RoosterEditor initialHtml="" /> */}
    </div>
  );
}
