import React, { MutableRefObject } from "react";
import { exportContent, IEditor } from "roosterjs";

export const GetContent = ({
  htmlString,
  handleHtmlString,
  iEditor,
}: {
  htmlString: String;
  handleHtmlString: (htmlString: String) => void;
  iEditor: MutableRefObject<IEditor | null>;
}) => {
  return (
    <div>
      <button
        onClick={() => {
          // console.log("iEditor", iEditor);
          if (iEditor.current) {
            handleHtmlString(exportContent(iEditor.current));
            console.log("htmlString", exportContent(iEditor.current));
          }
        }}
        className="mt-5 p-2 bg-blue-500 text-white rounded-md"
      >
        Get content
      </button>
      <div className="mt-5 p-2 border border-gray-300 rounded-lg min-h-[200px]">
        {htmlString}
      </div>
    </div>
  );
};
