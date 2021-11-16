import React from "react";
import style from "./Form.module.css";

export const Form = (props) => {
  const hasIcon = props.hasIcon;

  return (
    <div className={style.container}>
      {hasIcon && (
        <div className={style.icon}>
          <img src={props.Icon} alt="" />
        </div>
      )}

      <input
        type="text"
        className={style.input}
        placeholder={props.placeholder}
      />
    </div>
  );
};

Form.defaultProps = {
  hasIcon: false,
};
