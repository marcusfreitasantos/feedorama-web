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
          <S.MenuItem>
            <BookOpen width={24} color="#fff" />
            <Link href="/stories">
              <a>Stories</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <Box width={24} color="#fff" />
            <Link href="/categories">
              <a>Categorias</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <Users width={24} color="#fff" />
            <Link href="/users">
              <a>Usuários</a>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <LogOut width={24} color="#fff" />
            <a onClick={logout}>Sair</a>
          </S.MenuItem>
        </S.NavMenu>
      </S.Sidebar__container>
    </S.Sidebar>
  );
}
