import React from "react";
import { Cell } from "./Cell";

interface IProps {
  data: number[][];
}

export const Table: React.FC<IProps> = ({ data }) => (
  <table
    style={{
      borderSpacing: 0,
      borderCollapse: "collapse",
      textAlign: "center",
    }}
  >
    {data.map((row) => (
      <tr>
        {row.map((col) => (
          <td
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              padding: 0,
            }}
          >
            <Cell value={col} />
          </td>
        ))}
      </tr>
    ))}
  </table>
);
