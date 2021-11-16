import React from "react";
import { Button, Form } from "../../components";
import style from "./ModalAuth.module.css";
import { lock, mail } from "../../assets";

export default function ModalAuth() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>Selamat Datang</h2>
        <p>Admin Dinas DLH !</p>
        <Form hasIcon icon={mail} placeholder="Username" />
        <Form hasIcon icon={lock} placeholder="Password" />
        <Button login>Login</Button>
      </div>
    </div>
  );
}
