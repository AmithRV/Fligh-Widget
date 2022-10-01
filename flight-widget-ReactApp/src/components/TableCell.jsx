import React from "react";
import { useState } from "react";

function TableCell({ word, index }) {
  const [flip, setFlip] = useState();
  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return (
    <td>
      {Array.from(word).map((letter, index) => {
        return (
          <div key={index} className={flip ? "flip" : null}>
            {flip ? letter : ""}
          </div>
        );
      })}
    </td>
  );
}

export default TableCell;
