import React, { useEffect, useContext, useState } from "react";
import * as S from "./style";
import Logo from "img/feedorama-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { GlobalContext } from "../../contexts/GlobalContext";
import { loginUser, getUserByEmail } from "../../services/requests/users";
import { setCookie } from "nookies";
import Loader from "../Loader";
import { parseCookies } from "nookies";
import Button from "../Buttons";
import TextField from "../TextField";
import { Lock, Mail } from "react-feather";
import theme from "../../styles/theme";

export default function LoginForm() {
  const userToken = parseCookies().userToken;
  const router = useRouter();
  const { setUserInfo } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  async function handleSubmit() {
    setLoading(true);

    const login = await loginUser(userEmail, userPass);

    if (login) {
      const token = await login.data.AccessToken;
      const userObj = await getUserByEmail(token, userEmail);
      setUserInfo(userObj);
      localStorage.setItem("userInfo", JSON.stringify(userObj));
      router.push("/stories");

      setCookie(null, "userToken", token, {
        maxAge: 3600,
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

              <TextField
                placeholder="Seu email"
                onChange={(e) => setUserEmail(e.currentTarget.value)}
              >
                <Mail width={24} color={theme.colors.pink} />
              </TextField>

              <TextField
                placeholder="Senha"
                type="password"
                onChange={(e) => setUserPass(e.currentTarget.value)}
              >
                <Lock width={24} color={theme.colors.pink} />
              </TextField>

              <Button onClick={handleSubmit}>Entrar</Button>
            </S.Form>
          </S.Wrapper>
        )}
      </S.Container>
    </S.Section>
  );
}
