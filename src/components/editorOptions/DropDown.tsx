import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import KeyboardArrow from "/public/assets/common/KeyboardArrow.svg";

const DropDown = ({
  font,
  handleFont,
}: {
  font: string;
  handleFont: (fontName: string) => void;
}) => {
  // Sample list items to search from
  const items = ["Calibri", "Arial", "Helvetica"];

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

export default DropDown;
