import React from "react";
import TableRow from "./TableRow";

function TableBody() {
  const departures = [
    {
      destiny: "LISBOA",
      estimadedhour: "12:07",
      companyName: "Air Europe",
      terminal: "T2",
      flightNumber: "1153",
    },
    {
      destiny: "ATLANTA",
      estimadedhour: "10:45",
      companyName: "Delta",
      terminal: "T1",
      flightNumber: "109",
    },
    {
      destiny: "MIAMI",
      estimadedhour: "06:07",
      companyName: "Air Europe",
      terminal: "T2",
      flightNumber: "1153",
    },
    {
      destiny: "FRANCE",
      estimadedhour: "08:01",
      companyName: "British Airways",
      terminal: "T4s",
      flightNumber: "609",
    },
  ];

  return (
    <tbody>
      {departures.map((flight, index) => {
        return (
          <TableRow
            key={index}
            estimadedhour={flight?.estimadedhour}
            destiny={flight?.destiny}
            companyName={flight?.companyName}
            terminal={flight?.terminal}
            flightNumber={flight?.flightNumber}
          />
        );
      })}
    </tbody>
  );
}

export default TableBody;
