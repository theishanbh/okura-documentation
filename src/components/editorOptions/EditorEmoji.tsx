import Image from "next/image";
import Emoji from "/public/assets/rooster/editorOptions/Emoji.svg";
import { IEditor } from "roosterjs";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { insertEmoji } from "@/utils/insertEmoji";
import { Ribbon } from "roosterjs-react";

export const EditorEmoji = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [showEmojiOptions, setShowEmojiOptions] = useState(false);
  return (
    <div
      className="py-2 relative px-1 hover:bg-custom-blue-50 rounded-sm"
      onMouseEnter={() => {
        setShowEmojiOptions(true);
      }}
      onMouseLeave={() => {
        setShowEmojiOptions(false);
      }}
    >
      <Image src={Emoji} alt="emoji" />
      <div className="absolute top-8">
        <EmojiPicker
          open={showEmojiOptions}
          searchDisabled={false}
          skinTonesDisabled={true}
          onEmojiClick={(e) => {
            // console.log(emoji);
            insertEmoji(iEditor.current!, e.emoji);
          }}
        />
      </div>
    </div>
  );
};
