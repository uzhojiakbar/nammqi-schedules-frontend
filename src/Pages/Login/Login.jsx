import React, { useRef, useState } from "react";
import { LoginPage } from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import text from "../../Mock/text";
// import useGetCollections from "../../hooks/useCollections";
import getNotify from "../../Hooks/useNotify";

const Login = () => {
  const [loader, setloader] = useState(0);
  const { loading, markets } = { loading: false, markets: {} };
  const { notify } = getNotify();

  const UsernameRef = useRef({});
  const PassRef = useRef({});
  const nav = useNavigate();

  // const checkUser = async () => {
  //   setloader(1);

  //   try {
  //     const user = UsernameRef.current.input.value;
  //     const pass = PassRef.current.input.value;

  //     if (!user.length || !pass.length) {
  //       notify("err", "Barcha maydonlarni toldiring");
  //       setloader(0);
  //       return;
  //     }

  //     const validUser = markets.find(
  //       (userData) => userData.username === user && userData.password === pass
  //     );

  //     if (validUser) {
  //       localStorage.setItem("login", validUser.id);
  //       nav("/");
  //       notify("ok", "Hisobga kirildi");
  //       document.location.reload();
  //       setloader(0);
  //     } else {
  //       notify("err", "foydalanuvchi nomi yoki parol noto'g'ri.");
  //     }
  //   } catch (error) {
  //     if (error?.code === "ERR_NETWORK") {
  //       notify("err", "Tarmoqqa ulanishda muammo bor.");
  //     }
  //   }

  //   setloader(0);
  // };

  const checkUser = async () => {
    console.log(UsernameRef);
    console.log(PassRef);

    return;
  };

  return (
    <LoginPage>
      <div className="card ">
        <h1>{text.loginTitle}</h1>
        <div className="inputs">
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
          <Button className="button" onClick={checkUser} type="primary">
            {text.LoginSubmit}
          </Button>
        </div>
      </div>
      {loading ? (
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
