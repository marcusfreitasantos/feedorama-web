import React, { useEffect, useContext, useState } from "react";
import * as S from "./style";
import Logo from "img/feedorama-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { GlobalContext } from "../../contexts/GlobalContext";
import { loginUser } from "../../services/requests/users";
import { setCookie } from "nookies";
import Loader from "../Loader";
import { parseCookies } from "nookies";

export default function LoginForm() {
  const userToken = parseCookies().userToken;
  const router = useRouter();
  const { setUserInfo } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  async function handleCallbackResponse(response) {
    setLoading(true);
    const userObj = jwtDecode(response.credential);
    setUserInfo(userObj);

    const login = await loginUser(userObj.email);

    if (login) {
      const token = await login.data.AccessToken;
      localStorage.setItem("userInfo", JSON.stringify(userObj));
      router.push("/stories");
      setCookie(null, "userToken", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      alert("Usuário não localizado");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userToken) {
      router.push("/stories");
    }

    if (typeof google !== "undefined") {
      google.accounts.id.initialize({
        client_id:
          "555045706500-6fhdusi4dbmbiphr5gql3inkb4efioto.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
    }
  }, [loading]);

  return (
    <S.Section>
      <S.Container>
        <Image src={Logo} width="200px" />

        {loading ? (
          <Loader />
        ) : (
          <S.Wrapper>
            <S.Form>
              <S.Form__title>Faça Login com sua conta Google</S.Form__title>
              <S.GoogleButton>
                <div id="signInDiv"></div>
              </S.GoogleButton>
            </S.Form>
          </S.Wrapper>
        )}
      </S.Container>
    </S.Section>
  );
}
