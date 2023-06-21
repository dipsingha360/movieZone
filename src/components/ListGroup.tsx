import React from "react";
import { useState, MouseEvent } from "react";

function ListGroup() {
  const items = ["Spiderman", "Superman", "Wonderwomen", "Sreelanka"];

  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1 className="font-bold text-5xl">List Groups</h1>
      {items.length === 0 ? (
        <p className="py-10 font-medium text-2xl">No item found!</p>
      ) : null}

      {/* {items.length === 0 && (
        <p className="py-10 font-medium text-2xl">No item found!</p>
      )} */}

      <ul className="text-2xl py-10 flex flex-col items-center gap-3">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "border-b border-teal-300-500 cursor-pointer hover:text-teal-800 duration-300 uppercase font-medium text-4xl bg-teal-400 px-3 rounded-md py-2 "
                : "border-b border-teal-300-500 cursor-pointer hover:text-teal-800 duration-300 uppercase font-medium text-4xl px-3 rounded-md py-2 "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
