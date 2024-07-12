import Navbar from "@/components/Navbar";
import RoosterEditor from "@/components/RoosterEditor";
import KeyboardArrow from "../assets/common/KeyboardArrow.svg";
import Image from "next/image";
import { QuickAccess } from "@/components/editorOptions/QuickAccess";
import { ReactElement } from "react";

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

const data: ReactElement[] = [<QuickAccess key={1} />];

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 p-2 h-full border-r border-gray-custom-primary">
      {children}
    </div>
  );
}

export default function Page() {
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
      <div className="border px-2 flex py-2 items-center justify-between border-b border-gray-custom-primary">
        {/* make a map */}
        {data.map((element, index) => {
          return <Section key={index}>{element}</Section>;
        })}
        {/* normal text */}
        {/* font */}
        {/* size */}
        {/* bold, italic, underline, strip, text color */}
        {/* alignment, list, alignment */}
        {/* checklist, link, code, image and what not */}
        {/* mention, reference,emoji,upscript, subscript, number, Tsf */}
        {/* search, dotted */}
      </div>
      {/* TODO: make rooster editor */}
      <RoosterEditor initialHtml={initialHtmlString} />
    </div>
  );
}
