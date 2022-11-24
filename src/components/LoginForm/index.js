import React, { useEffect, useContext } from "react";
import TextField from "../TextField";
import * as S from "./style";
import { User, Lock } from "react-feather";
import theme from "../../styles/theme";
import Button from "../Buttons";
import Logo from "img/feedorama-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { GlobalContext } from "../../contexts/GlobalContext";
import { loginUser } from "../../services/requests/users";
import { setCookie } from "nookies";

export default function LoginForm() {
  const router = useRouter();
  const { setUserInfo } = useContext(GlobalContext);

  async function handleCallbackResponse(response) {
    const userObj = jwtDecode(response.credential);
    setUserInfo(userObj);

    const login = await loginUser(userObj.email);

    if (login) {
      const token = await login.data.AccessToken;
      router.push("/stories");
      setCookie(null, "userToken", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      alert("Usuário não localizado");
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "555045706500-6fhdusi4dbmbiphr5gql3inkb4efioto.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <S.Section>
      <S.Container>
        <Image src={Logo} width="200px" />

        <S.Wrapper>
          <S.Form>
            <S.Form__title>Faça Login com sua conta Google</S.Form__title>
            <S.GoogleButton>
              <div id="signInDiv"></div>
            </S.GoogleButton>
          </S.Form>
        </S.Wrapper>
      </S.Container>
    </S.Section>
  );
}
