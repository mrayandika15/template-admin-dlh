import React, { useMemo } from "react";
import style from "./Table.module.css";

import { useTable } from "react-table";
import { Button } from "..";

export const Table = () => {
  const data = useMemo(
    () => [
      {
        col1: "rayandika",
        col2: "putra",
      },
      {
        col1: "react-table",
        col2: "react-col",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Column1",
        accessor: "col1",
      },
      {
        Header: "Column2",
        accessor: "col2",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={style.container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className={style.action__container}>
                  <Button primary height={30}>
                    Update
                  </Button>
                  <Button danger height={30}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
