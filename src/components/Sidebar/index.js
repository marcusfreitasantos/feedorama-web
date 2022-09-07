import React from "react";
import * as S from "./style";
import Link from "next/link";
import { LogOut, Users, Home, Lock, BookOpen } from "react-feather";

export default function Sidebar() {
  function logout() {
    alert("Logout");
  }

  return (
    <S.Sidebar>
      <S.Sidebar__container>
        <S.LogoWrapper>
          <S.Logo src="/img/feedorama-logo.svg" />
        </S.LogoWrapper>

        <S.UserInfoWrapper>
          <S.UserInfo__avatar></S.UserInfo__avatar>
          <S.UserInfo__name></S.UserInfo__name>
          <S.UserInfo__email></S.UserInfo__email>
        </S.UserInfoWrapper>

        <S.NavMenu>
          <S.MenuItem>
            <Home width={24} color="#fff" />
            <Link href="/dashboard">
              <a>Início</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <BookOpen width={24} color="#fff" />
            <Link href="/stories">
              <a>Stories</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <Users width={24} color="#fff" />
            <Link href="/users">
              <a>Usuários</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <Lock width={24} color="#fff" />
            <Link href="/profile">
              <a>Perfil</a>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <LogOut width={24} color="#fff" />
            <Link href="/">
              <a>Sair</a>
            </Link>
          </S.MenuItem>
        </S.NavMenu>
      </S.Sidebar__container>
    </S.Sidebar>
  );
}
