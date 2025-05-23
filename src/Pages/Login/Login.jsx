import React, { useRef, useState } from "react";
import { LoginPage } from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import text from "../../Mock/text";
import getNotify from "../../Hooks/useNotify";
import { useSignIn } from "../../Hooks/useRegister";

const Login = () => {
  const [loader, setloader] = useState(0);
  const { notify } = getNotify();

  const UsernameRef = useRef({});
  const PassRef = useRef({});
  const nav = useNavigate();

  const { mutate } = useSignIn(
    () => {
      notify("ok", "Hisobga kirdingiz..."); // Yuklanish holatini ko'rsatish

      setloader(0);
      document.location.reload();
    },
    (error) => {
        notify("err", error.response?.data?.error);
        setloader(0);
    }
  );

  const checkUser = async (e) => {
    e.preventDefault();
    setloader(1);
    const requestData = {
      username: UsernameRef?.current?.input?.value || "",
      password: PassRef?.current?.input?.value || "",
    };
    try {
      await mutate(requestData); // Just call login
    } catch (error) {
      setloader(0);
      console.error("Login error: ", error);
    }
  };

  return (
    <LoginPage>
      <div className="card ">
        <h1>{text.loginTitle}</h1>
        <Form onFinish={checkUser} autoComplete="on" className="inputs">
          <Input
            ref={UsernameRef}
            className="input"
            placeholder={text.enterLogin}
          />
          <Input.Password
            ref={PassRef}
            className="input"
            placeholder={text.enterPassword}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            htmlType="submit"
            className="button"
            onClick={checkUser}
            type="primary"
          >
            {text.LoginSubmit}
          </Button>
        </Form>
      </div>
      {loader ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
    </LoginPage>
  );
};

export default Login;
