import React from "react";
import style from "./Typography.module.css";

export const Typography = (props) => {
  return (
    <div className={style.container}>
      <div className={style.name}>{props.name}</div>
      <div className={style.header}>{props.header}</div>
    </div>
  );
};
