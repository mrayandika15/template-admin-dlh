import React from "react";
import style from "./Sidebar.module.css";
// assets
import {
  logo,
  dashboardIcon,
  twoPeople,
  dataParsial,
  dataPotensial,
  setting,
  logout,
} from "../../assets";

// components
import { Button } from "../../components";

export const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo__container}>
        <img src={logo} alt="" />
      </div>

      <div className={style.button__container}>
        <Button sidebarActive icon iconSrc={dashboardIcon} iconAlt="">
          Dashboard
        </Button>

        <Button sidebarInActive icon iconSrc={dataPotensial} iconAlt="">
          Data BOD Potensial
        </Button>

        <Button sidebarInActive icon iconSrc={dataParsial} iconAlt="">
          Data BOD Parsial
        </Button>

        <Button sidebarInActive icon iconSrc={twoPeople} iconAlt="">
          Data User
        </Button>

        <Button sidebarInActive icon iconSrc={setting} iconAlt="">
          Setting Dashboard
        </Button>
      </div>

      <div className={style.button__logout}>
        <Button logout icon iconSrc={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
