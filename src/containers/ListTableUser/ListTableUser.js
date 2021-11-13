import React, { useMemo } from "react";
import { Button, Card, Table } from "../../components";

import style from "./ListTableUser.module.css";

export const ListTableUser = () => {
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

  return (
    <div className={style.container}>
      <div className={style.container__button}>
        <Button primary> Buat Akun </Button>
      </div>
      <div className={style.container__form}>
        <Card>
          <Table columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
};
