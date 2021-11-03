import React from "react";
import { Widget } from "../../components";
import style from "./ContentWidget.module.css";
import { chartWidget } from "../../assets";

export const ContentWidget = () => {
  return (
    <div className={style.container}>
      <div className={style.section1__container}>
        <div className={style.large__content}>
          <Widget
            largeWidget
            header="Data Beban Pencemaran BOD Potensial"
            desc="Masukan Data BOD dengan Klik Button di bawah ini !"
            imgSrc={chartWidget}
            button="Masukan Data"
          />
        </div>

        <Widget mediumWidget historyWidget content="raka" />
      </div>
      <div className={style.section2__container}>
        <div className={style.large__content}>
          <Widget
            largeWidget
            header="Data Beban Pencemaran BOD Aktual"
            desc="Masukan Data Pengolahan Air !"
            imgSrc={chartWidget}
            button="Masukan Data"
          />
        </div>
      </div>
    </div>
  );
};
