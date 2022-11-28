import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import Link from "next/link";
import { LogOut, Users, BookOpen, Box } from "react-feather";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

export default function Sidebar() {
  const Router = useRouter();
  const { userInfo, setUserInfo } = useContext(GlobalContext);

  function logout() {
    setUserInfo([]);
    destroyCookie(null, "userToken");
    localStorage.removeItem("userInfo");
    Router.push("/");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("userInfo")) {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      }
    }
  }, []);

  return (
    <S.Sidebar>
      <S.LogoWrapper>
        <S.Logo src="/img/feedorama-logo.svg" />
      </S.LogoWrapper>
      <S.Sidebar__container>
        <S.UserInfoWrapper>
          <S.UserInfo__avatar src={userInfo?.picture} />
          <S.UserInfo__name>
            {userInfo?.given_name} {userInfo?.family_name}
          </S.UserInfo__name>
          <S.UserInfo__email>{userInfo?.email}</S.UserInfo__email>
        </S.UserInfoWrapper>

        <S.NavMenu>
          <Link href="/stories">
            <S.MenuItem>
              <BookOpen width={24} color="#fff" />
              <a>Stories</a>
            </S.MenuItem>
          </Link>

          <Link href="/categories">
            <S.MenuItem>
              <Box width={24} color="#fff" />
              <a>Categorias</a>
            </S.MenuItem>
          </Link>

          <Link href="/users">
            <S.MenuItem>
              <Users width={24} color="#fff" />
              <a>Usuários</a>
            </S.MenuItem>
          </Link>

          <S.MenuItem onClick={() => logout()}>
            <LogOut width={24} color="#fff" />
            <a>Sair</a>
          </S.MenuItem>
        </S.NavMenu>
      </S.Sidebar__container>
    </S.Sidebar>
  );
}
