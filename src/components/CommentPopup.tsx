import { commentProps } from "@/types/userComment";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { IEditor } from "roosterjs";

const user = {
  name: "John Doe",
  position: "CEO",
};

const CommentPopup = ({
  prevComments,
  handleComment,
  iEditor,
  userComment,
  setUserComment,
}: {
  prevComments: commentProps[];
  handleComment: React.Dispatch<React.SetStateAction<commentProps[]>>;
  iEditor: React.MutableRefObject<IEditor | null>;
  userComment: string;
  setUserComment: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showEmojiOptions, setShowEmojiOptions] = useState(false);
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  // TODO: reaction deleting other reactions
  const handleReactionChange = (id: number, newReaction: string) => {
    console.log(id);
    // console.log(prevComments);
    const updatedComments = prevComments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, reaction: newReaction };
      }
      return comment;
    });
    handleComment(updatedComments);
  };

  return (
    <div className=" bg-gray-100">
      <div className=" mx-auto bg-white shadow-lg rounded-lg mb-4">
        {prevComments.map((comment, index) => (
          <div key={index} className="p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-custom-gray-primary"></div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold">{comment.name}</h3>
                <p className="text-custom-blue-primary text-sm">
                  {comment.position}
                </p>
              </div>
            </div>
            <div className="mt-4 text-sm ">
              <p>{comment.comment}</p>
            </div>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex gap-2">
                <div
                  onMouseEnter={() => {
                    setCurrentOpen(comment.id);
                    setShowEmojiOptions(true && comment.id == currentOpen);
                  }}
                  onMouseLeave={() => setShowEmojiOptions(false)}
                  className="h-5 w-5 relative flex items-center rounded-md justify-center hover:bg-custom-blue-secondary"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16.5C6.9625 16.5 5.9875 16.3031 5.075 15.9094C4.1625 15.5156 3.36875 14.9813 2.69375 14.3063C2.01875 13.6313 1.48438 12.8375 1.09063 11.925C0.696875 11.0125 0.5 10.0375 0.5 9C0.5 7.9625 0.696875 6.9875 1.09063 6.075C1.48438 5.1625 2.01875 4.36875 2.69375 3.69375C3.36875 3.01875 4.1625 2.48438 5.075 2.09063C5.9875 1.69687 6.9625 1.5 8 1.5C8.5375 1.5 9.05625 1.55312 9.55625 1.65937C10.0562 1.76562 10.5375 1.91875 11 2.11875V3.80625C10.5625 3.55625 10.0906 3.35938 9.58438 3.21563C9.07812 3.07188 8.55 3 8 3C6.3375 3 4.92188 3.58438 3.75313 4.75313C2.58438 5.92188 2 7.3375 2 9C2 10.6625 2.58438 12.0781 3.75313 13.2469C4.92188 14.4156 6.3375 15 8 15C9.6625 15 11.0781 14.4156 12.2469 13.2469C13.4156 12.0781 14 10.6625 14 9C14 8.6 13.9594 8.2125 13.8781 7.8375C13.7969 7.4625 13.6875 7.1 13.55 6.75H15.1625C15.275 7.1125 15.3594 7.47813 15.4156 7.84688C15.4719 8.21563 15.5 8.6 15.5 9C15.5 10.0375 15.3031 11.0125 14.9094 11.925C14.5156 12.8375 13.9813 13.6313 13.3063 14.3063C12.6313 14.9813 11.8375 15.5156 10.925 15.9094C10.0125 16.3031 9.0375 16.5 8 16.5ZM14 5.25V3.75H12.5V2.25H14V0.75H15.5V2.25H17V3.75H15.5V5.25H14ZM10.625 8.25C10.9375 8.25 11.2031 8.14062 11.4219 7.92188C11.6406 7.70312 11.75 7.4375 11.75 7.125C11.75 6.8125 11.6406 6.54688 11.4219 6.32812C11.2031 6.10938 10.9375 6 10.625 6C10.3125 6 10.0469 6.10938 9.82812 6.32812C9.60938 6.54688 9.5 6.8125 9.5 7.125C9.5 7.4375 9.60938 7.70312 9.82812 7.92188C10.0469 8.14062 10.3125 8.25 10.625 8.25ZM5.375 8.25C5.6875 8.25 5.95312 8.14062 6.17188 7.92188C6.39062 7.70312 6.5 7.4375 6.5 7.125C6.5 6.8125 6.39062 6.54688 6.17188 6.32812C5.95312 6.10938 5.6875 6 5.375 6C5.0625 6 4.79688 6.10938 4.57812 6.32812C4.35938 6.54688 4.25 6.8125 4.25 7.125C4.25 7.4375 4.35938 7.70312 4.57812 7.92188C4.79688 8.14062 5.0625 8.25 5.375 8.25ZM8 13.125C8.85 13.125 9.62188 12.8844 10.3156 12.4031C11.0094 11.9219 11.5125 11.2875 11.825 10.5H4.175C4.4875 11.2875 4.99062 11.9219 5.68437 12.4031C6.37812 12.8844 7.15 13.125 8 13.125Z"
                      fill="#044899"
                    />
                  </svg>
                  <div
                    className={`absolute left-0 top-4  ${
                      showEmojiOptions && comment.id == currentOpen
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <EmojiPicker
                      searchDisabled={true}
                      skinTonesDisabled={false}
                      onEmojiClick={(e) => {
                        handleReactionChange(comment.id, e.emoji);
                        setShowEmojiOptions(false);
                      }}
                      reactionsDefaultOpen={true}
                    />
                  </div>
                </div>
                {comment.reaction.length > 0 && (
                  <div
                    onClick={() => {
                      console.log("reaction removed");
                      handleReactionChange(comment.id, "");
                    }}
                    className="h-5 w-5 flex items-center rounded-md justify-center hover:bg-custom-blue-secondary"
                  >
                    <span>{comment.reaction}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  console.log("comment removed");
                  handleComment(prevComments.filter((_, i) => i !== index));
                }}
                className="h-5 w-5 underline text-custom-blue-primary"
              >
                Resolve
              </button>
            </div>
          </div>
        ))}

        <div className="p-4 bg-gray-50">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-gray-700">
                {user.name}
              </h3>
              <p className="text-gray-500">{user.position}</p>
            </div>
          </div>
          <div className="mt-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="How to add yhfigfh"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
            <button
              onClick={() => {
                console.log("comment added");
                handleComment([
                  ...prevComments,
                  {
                    id: prevComments.length + 1,
                    name: user.name,
                    position: user.position,
                    comment: userComment,
                    reaction: "",
                  },
                ]);
                setUserComment("");
              }}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
