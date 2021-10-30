import React from "react";
import { Widget } from "../../components";
import style from "./ContentWidget.module.css";
import { chartWidget } from "../../assets";

export const ContentWidget = () => {
  return (
    <div className={style.container}>
      <div className={style.section1__container}>
        <Widget
          largeWidget
          header="Data BOD"
          desc="Masukan data BOD"
          imgSrc={chartWidget}
          button="Masukan Data"
        />
      </div>
      <div className={style.section2__container}>
        <Widget
          largeWidget
          header="Data BOD"
          desc="Masukan data BOD"
          imgSrc={chartWidget}
          button="Masukan Data"
        />
      </div>
    </div>
  );
};
