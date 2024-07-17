import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import KeyboardArrow from "/public/assets/common/KeyboardArrow.svg";

const DropDownHeading = ({
  font,
  handleFont,
}: {
  font: number;
  handleFont: (fontName: 0 | 1 | 2 | 3 | 4 | 5 | 6) => void;
}) => {
  // Sample list items to search from
  const items = [
    { id: 0, name: "Normal" },
    { id: 1, name: "Heading 1" },
    { id: 2, name: "Heading 2" },
    { id: 3, name: "Heading 3" },
    { id: 4, name: "Heading 4" },
    { id: 5, name: "Heading 5" },
    { id: 6, name: "Heading 6" },
  ];

  return (
    <div className="relative">
      <select
        className="w-full focus:border-none focus-visible:border-none"
        name="cars"
        id="cars"
        value={font}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          handleFont(Number(e.target.value) as 0 | 1 | 2 | 3 | 4 | 5 | 6);
        }}
      >
        {items.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownHeading;
