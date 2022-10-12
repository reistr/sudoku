import React from "react";

export const Cell: React.FC<{ value: number }> = ({ value }) => {
  const style: React.CSSProperties = {
    width: "2em",
    height: "2em",
    backgroundColor: "yellow",
    display: "table-cell",
    verticalAlign: "middle",
  };

  return <div style={style}>{value}</div>;
};
