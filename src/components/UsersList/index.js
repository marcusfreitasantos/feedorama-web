import React, { useState } from "react";
import MainContentHeader from "../MainContentHeader";
import { getUsers, deleteUser } from "../../services/requests/users";
import {
  MainContent__container,
  MainContent__section,
} from "../../styles/global";
import { Trash, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import Modal from "../../components/Modal";
import { useRouter } from "next/router";

import * as S from "./style";

export default function CategoryList(props) {
  const token = props.cookies.userToken;
  const Router = useRouter();
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [listUsers, setListUsers] = useState(props.users);

  async function deleteUserById(userId, userEmail) {
    if (userEmail !== "marcusfreitasantos@gmail.com") {
      const response = await deleteUser(token, userId);

      if (response.status === 200) {
        {
          setSucessModal(true);
        }
      } else {
        {
          setErrorModal(true);
        }
      }
    } else {
      alert("Ação não permitida!");
    }
  }

  async function getUsersList() {
    const content = await getUsers(token);
    setListUsers(content);
    setSucessModal(false);
    setErrorModal(false);
  }

  function AddNew() {
    Router.push("/users/new");
  }

  return (
    <MainContent__section>
      <MainContent__container>
        <MainContentHeader data={props.pageTitle} onClick={AddNew} />

        <S.MainContent__ContentWrapper>
          <S.Content__row>
            <S.Content__item className="row__header">Username</S.Content__item>
            <S.Content__item className="row__header">Nome</S.Content__item>
            <S.Content__item className="row__header">E-mail</S.Content__item>
            <S.Content__item className="row__header">Categoria</S.Content__item>
            <S.Content__item className="row__header">Ações</S.Content__item>
          </S.Content__row>
          {listUsers &&
            listUsers.map((content, index) => {
              return (
                <S.Content__row key={content.userId}>
                  <S.Content__item>{content.username}</S.Content__item>
                  <S.Content__item>{content.name}</S.Content__item>
                  <S.Content__item>{content.email}</S.Content__item>
                  <S.Content__item>
                    {content.preferences_categories[0]}
                  </S.Content__item>
                  <S.Content__item>
                    <S.Content__buttonWrapper>
                      <S.Content__button
                        onClick={() =>
                          deleteUserById(content.userId, content.email)
                        }
                      >
                        <Trash width={24} color={theme.colors.pink} />
                      </S.Content__button>
                    </S.Content__buttonWrapper>
                  </S.Content__item>
                </S.Content__row>
              );
            })}
        </S.MainContent__ContentWrapper>

        {sucessModal && (
          <Modal
            title="Usuário desativado!"
            onClickConfirm={() => getUsersList()}
          >
            <CheckCircle width={40} height={40} color={theme.colors.yellow} />
          </Modal>
        )}
        {errorModal && (
          <Modal
            title="Oops. Há algo errado."
            onClickCancel={() => getUsersList()}
          >
            <AlertCircle width={40} height={40} color={theme.colors.pink} />
          </Modal>
        )}
      </MainContent__container>
    </MainContent__section>
  );
}
