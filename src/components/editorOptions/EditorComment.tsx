import Image from "next/image";
import { IEditor, setAlignment } from "roosterjs";
import Comment from "/public/assets/rooster/editorOptions/Comment.svg";
import { insertLink } from "@/utils/insertLink";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import CommentPopup from "../CommentPopup";
import { commentProps } from "@/types/userComment";

const EditorComment = ({
  iEditor,
  setShowCommentBox,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
  setShowCommentBox: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative">
      <div
        className="h-full relative py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
        onClick={() => {
          setShowCommentBox(true);
        }}
      >
        <Image src={Comment} alt="comment" />
      </div>
    </div>
  );
};

export default EditorComment;
