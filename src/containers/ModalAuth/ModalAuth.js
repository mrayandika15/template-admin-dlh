import React, { useRef } from "react";
import { Button, Form } from "../../components";
import style from "./ModalAuth.module.css";
import { lock, mail } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { loginAsnyc } from "../../store/auth/auth.action";
import { useHistory } from "react-router";

export default function ModalAuth() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state);

  console.log(token);

  const history = useHistory();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const usernameInput = usernameRef.current.value;
    const passwordInput = passwordRef.current.value;

    const Form = {
      identifier: usernameInput,
      password: passwordInput,
    };

    dispatch(loginAsnyc(Form));
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>Selamat Datang</h2>
        <p>Admin Dinas DLH !</p>
        <form onSubmit={submitHandler}>
          <Form
            hasIcon
            icon={mail}
            onType="Text"
            onRef={usernameRef}
            placeholder="Username"
          />
          <Form
            hasIcon
            icon={lock}
            onType="password"
            placeholder="Password"
            onRef={passwordRef}
          />
          <Button login onType="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
