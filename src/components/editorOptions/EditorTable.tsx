import Image from "next/image";
import Table from "/public/assets/rooster/editorOptions/Table.svg";
import React, { useState } from "react";
import { IEditor, insertTable } from "roosterjs";

const SelectTable = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const rows = 6;
  const columns = 8;
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

  const handleCellClick = (row: number, col: number) => {
    console.log(row, col);
    +setSelectedCell({ row, col });
  };

  return (
    <div className="flex flex-col items-center mt-4 bg-custom-blue-50 p-1">
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: rows }).map((_, rowIndex) =>
          Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-3 h-3 border flex items-center justify-center cursor-pointer
                ${
                  selectedCell.row >= rowIndex && selectedCell.col >= colIndex
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              onMouseEnter={() => handleCellClick(rowIndex, colIndex)}
              onClick={() => {
                insertTable(
                  iEditor.current!,
                  selectedCell.col + 1,
                  selectedCell.row + 1
                );
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export const EditorTable = ({
  iEditor,
}: {
  iEditor: React.MutableRefObject<IEditor | null>;
}) => {
  const [showTableOptions, setShowTableOptions] = useState(false);
  return (
    <div
      className="h-full relative py-2 px-1 hover:bg-custom-blue-50 rounded-sm"
      onMouseEnter={() => {
        setShowTableOptions(true);
      }}
      onMouseLeave={() => {
        setShowTableOptions(false);
      }}
    >
      <Image src={Table} alt="alignment" />
      <div
        className={`absolute w-32 top-3 left-0 ${
          showTableOptions ? "" : "hidden"
        }`}
      >
        <SelectTable iEditor={iEditor} />
      </div>
    </div>
  );
};
