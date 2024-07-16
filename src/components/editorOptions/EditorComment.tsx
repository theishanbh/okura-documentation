import Image from "next/image";
import { IEditor, setAlignment } from "roosterjs";
import Comment from "/public/assets/rooster/editorOptions/Comment.svg";
import { insertLink } from "@/utils/insertLink";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import CommentPopup from "../CommentPopup";
import { commentProps } from "@/types/userComment";

const initalComments: commentProps[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    comment: "This is a great comment",
    reaction: "👍",
  },
];

const EditorComment = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [comments, setComments] = useState<commentProps[]>(initalComments);
  const [userComment, setUserComment] = useState<string>("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const wrapperRef = useRef(null);

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
      <div
        ref={wrapperRef}
        onMouseLeave={() => {
          setShowCommentBox(false);
        }}
        className={`absolute min-w-96 top-10 ${showCommentBox ? "" : "hidden"}`}
      >
        <CommentPopup
          prevComments={comments}
          handleComment={setComments}
          iEditor={iEditor}
          userComment={userComment}
          setUserComment={setUserComment}
        />
      </div>
    </div>
  );
};

export default EditorComment;
