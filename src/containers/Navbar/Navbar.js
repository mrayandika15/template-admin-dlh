import React from "react";
import { NavbarMobile, SearchBar, Typography } from "../../components";
import style from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <div className={style.container}>
      <Typography name="Hi Rayandika" header={props.header} />
      <SearchBar />
      <NavbarMobile />
    </div>
  );
};
