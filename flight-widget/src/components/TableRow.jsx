import React from "react";
import TableCell from "./TableCell";

function TableRow(flight) {
  const words = Object.values(flight);

  return (
    <tr>
      <td>
        <img src="./flight-icon.svg" alt="" />
      </td>

      {words?.map((word, index) => (
        <TableCell key={index} word={word} index={index} />
      ))}
    </tr>
  );
}

export default TableRow;
