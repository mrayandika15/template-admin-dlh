import React from "react";
import { SearchBar, Typography } from "../../components";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.container}>
      <Typography name="Hi Rayandika" header="Welcome to DLH Cimahi" />
      <SearchBar />
    </div>
  );
};