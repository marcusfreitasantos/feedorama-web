import React from "react";
import TextField from "../TextField";
import * as S from "./style";
import { User, Lock } from "react-feather";
import theme from "../../styles/theme";
import Button from "../Buttons";
import Logo from "img/feedorama-logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();

  function login(e) {
    e.preventDefault();
    router.push("/dashboard");
  }
  return (
    <S.Section>
      <S.Container>
        <Image src={Logo} width="200px" />

        <S.Wrapper>
          <S.Form>
            <S.Form__title>Faça Login</S.Form__title>
            <TextField type="email" placeholder="Digite seu e-mail">
              <User width={24} height={24} color={theme.colors.pink} />
            </TextField>

            <TextField type="password" placeholder="Senha">
              <Lock width={24} height={24} color={theme.colors.pink} />
            </TextField>

            <Button onClick={login}>Entrar</Button>
          </S.Form>
        </S.Wrapper>
      </S.Container>
    </S.Section>
  );
}
