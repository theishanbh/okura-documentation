"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  IEditor,
  createEditor,
  exportContent,
  toggleBold,
  redo,
  undo,
  EditorPlugin,
  createModelFromHtml,
  toggleCode,
  insertImage,
  toggleBullet,
} from "roosterjs";

type RoosterEditorProps = {
  initialHtml: string;
};

const RoosterEditor: React.FC<RoosterEditorProps> = ({ initialHtml }) => {
  const initialHtmlString = `<!DOCTYPE html> 
  <html lang="en"> 
  <head> 
      <meta charset="UTF-8"> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
      <title>HTML JavaScript</title> 
  </head> 
  <body> 
      <h1>GeeksforGeeks</h1> 
      <h3>HTML JavaScript</h3> 
      <script> 
          const h1element = document.getElementsByTagName("h1")[0]; 
          h1element.style.color = "green"; 
      </script> 
  </body> 
  </html>`;

  const [htmlString, setHtmlString] = useState<String>(initialHtmlString);

  const editorDivRef = useRef<HTMLDivElement | null>(null);
  let iEditor: IEditor | null = null;
  const additionalPlugins: EditorPlugin[] = []; // TODO

  useEffect(() => {
    if (editorDivRef.current) {
      iEditor = createEditor(
        editorDivRef.current,
        additionalPlugins,
        createModelFromHtml(String(htmlString ? htmlString : initialHtml))
      );
    }
    return () => {
      iEditor?.dispose();
    };
  }, [htmlString]);

  return (
    <div>
      <div className="text-center mt-10">Rooster Editor</div>
      <div className="flex gap-2 ml-10 mt-10">
        <button onClick={() => undo(iEditor!)}>undo</button>
        <button onClick={() => redo(iEditor!)}>redo</button>
        <button onClick={() => toggleBold(iEditor!)}>bold</button>
        <button onClick={() => toggleCode(iEditor!)}>{"<>"}</button>
        <button onClick={() => toggleBullet(iEditor!)}>{"bullet"}</button>
        <button
          onClick={() =>
            insertImage(
              iEditor!,
              "https://www.google.com/imgres?q=anything&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100045701810247&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fanything.agency%2F&docid=YDhds2iZfoQqlM&tbnid=fZhakQjG7CHC7M&vet=12ahUKEwiOx8DD_YOHAxVqkq8BHbd6DBQQM3oECBoQAA..i&w=1042&h=1042&hcb=2&ved=2ahUKEwiOx8DD_YOHAxVqkq8BHbd6DBQQM3oECBoQAA"
            )
          }
        >
          Image
        </button>
      </div>
      <div
        ref={editorDivRef}
        className="ml-10 mt-5 p-5 border border-gray-300 rounded-lg min-h-[200px]"
      />
      <button
        onClick={() => {
          // console.log("iEditor", iEditor);
          if (iEditor) {
            setHtmlString(exportContent(iEditor));
            console.log("htmlString", exportContent(iEditor));
          }
        }}
        className="ml-10 mt-5 p-2 bg-blue-500 text-white rounded-md"
      >
        Get content
      </button>
      <div className="ml-10 mt-5 p-5 border border-gray-300 rounded-lg min-h-[200px]">
        {htmlString}
      </div>
    </div>
  );
};

export default RoosterEditor;
