import React from "react";
import { Button, Card } from "../../components";

import style from "./ListTable.module.css";

export const ListTable = () => {
  return (
    <div className={style.container}>
      <div className={style.container__button}>
        <Button primary> Buat Akun </Button>
      </div>
      <div className={style.container__form}>
        <Card>
          
        </Card>
      </div>
    </div>
  );
};
