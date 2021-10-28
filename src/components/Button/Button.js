import React from "react";
import style from "./Button.module.css";

export default function Button(props) {
  const classNameBtn = [style.btn];

  const icon = props.icon;

  if (props.sidebarActive === true) {
    classNameBtn.push(style.sidebarActive);
  }

  if (props.sidebarInActive === true) {
    classNameBtn.push(style.sidebarInactive);
  }

  if (props.primary === true) {
    classNameBtn.push(style.primary);
  }

  if (props.danger === true) {
    classNameBtn.push(style.danger);
  }

  // modal
  if (props.yesModal === true) {
    classNameBtn.push(style.yesmodal);
  }

  if (props.noModal === true) {
    classNameBtn.push(style.nomodal);
  }

  // button Widget
  if (props.widget === true) {
    classNameBtn.push(style.widget);
  }

  if (props.detail === true) {
    classNameBtn.push(style.detail);
  }

  if (props.userButton === true) {
    classNameBtn.push(style.userButton);
  }

  if (props.login === true) {
    classNameBtn.push(style.loginButton);
  }

  // Push Icon to the right
  if (props.iconRight === true) {
    classNameBtn.push(style.rightIcon);
  }

  return (
    <div className={classNameBtn.join(" ")}>
      {icon && (
        <div className={style.icon}>
          <img
            src={props.iconSrc}
            alt={props}
            style={{ width: props.widthIcon, height: props.heightIcon }}
          />
        </div>
      )}
      {props.children}
    </div>
  );
}

Button.defaultProps = {
  icon: false,
  sidebarActive: false,
  sidebarInActive: false,
  primary: false,
  danger: false,
  yesModal: false,
  noModal: false,
  widget: false,
  rightIcon: false,
  login: false,
};
