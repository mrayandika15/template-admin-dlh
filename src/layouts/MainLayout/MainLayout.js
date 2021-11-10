import React from "react";
import { Sidebar } from "../../containers";
import style from "./MainLayout.module.css";

export const MainLayout = (props) => {
  return (
    <div className={style.container}>
      <Sidebar />
      {props.children}
    </div>
  );
};
