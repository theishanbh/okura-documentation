"use client";

import KeyboardArrow from "/public/assets/common/KeyboardArrow.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  createEditor,
  createModelFromHtml,
  EditorPlugin,
  IEditor,
  ImageEditPlugin,
  TableEditPlugin,
} from "roosterjs";

import { MyEditor } from "@/components/MyEditor";
import { Toolbar } from "@/components/Toolbar";
import RoosterEditor from "@/components/RoosterEditor";
import { TestPlugin } from "@/plugins/testPlugin";
import { GetContent } from "@/components/GetContent";

// This plugin will insert an English word when user is inputting numbers

export default function Page() {
  const editorDivRef = useRef<HTMLDivElement | null>(null);

  const [htmlString, setHtmlString] = useState<String>(
    `<iframe width="100" height="315" src="https://www.youtube.com/embed/_BBVcyJ1ClA?si=cbl5JpKlPqKjyTLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );

  const iEditor = useRef<IEditor | null>(null);

  console.log(editorDivRef);

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
    ]; // TODO:
    if (editorDivRef.current) {
      iEditor.current = createEditor(
        editorDivRef.current,
        additionalPlugins,
        createModelFromHtml(String(htmlString))
      );
    }
    return () => {
      iEditor.current?.dispose();
    };
  }, [htmlString]);

  return (
    <div className="h-full w-full">
      {/* title */}
      <div className=" bg-blue-custom-50 border py-2 px-4 flex items-center justify-between border-blue-custom-secondary">
        <span className="text-sm">Title of the page</span>
        <div className=" border-l border-blue-custom-secondary">
          <Image
            className="h-6 w-6 pl-2 text-black-custom-primary"
            src={KeyboardArrow}
            alt="arrow"
          />
        </div>
      </div>
      {/* rooster editor options */}
      <Toolbar iEditor={iEditor!} />
      {/* TODO: make rooster editor */}
      <MyEditor editorDivRef={editorDivRef} />
      <GetContent
        htmlString={htmlString}
        handleHtmlString={setHtmlString}
        iEditor={iEditor}
      />
      {/* <RoosterEditor initialHtml="" /> */}
    </div>
  );
}
