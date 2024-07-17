import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import KeyboardArrow from "/public/assets/common/KeyboardArrow.svg";

const DropDownFont = ({
  font,
  handleFont,
}: {
  font: string;
  handleFont: (fontName: string) => void;
}) => {
  // Sample list items to search from
  const items = [
    "Calibri",
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Verdana",
    "Courier New",
    "Lucida Console",
    "Tahoma",
    "Comic Sans MS",
    "Impact",
    "Georgia",
    "Palatino Linotype",
    "Book Antiqua",
    "Arial Black",
    "Arial Narrow",
    "Gadget",
    "Trebuchet MS",
    "Century Gothic",
    "Lucida Sans Unicode",
    "Copperplate",
    "Papyrus",
    "Brush Script MT",
  ];

  return (
    <div className="relative">
      <select
        className="w-full focus:border-none focus-visible:border-none"
        name="cars"
        id="cars"
        value={font}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          handleFont(e.target.value);
        }}
      >
        {items.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownFont;
