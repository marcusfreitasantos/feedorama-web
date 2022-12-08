import React, { useState, useEffect } from "react";
import * as S from "./style";

import { Trash, Edit, Search, CheckCircle, AlertCircle } from "react-feather";
import theme from "../../styles/theme";
import {
  MainContent__container,
  MainContent__section,
} from "../../styles/global";
import { useRouter } from "next/router";
import MainContentHeader from "../MainContentHeader";
import CategorySelect from "../CategorySelect";
import TextField from "../TextField";
import { getStories, deleteStories } from "../../services/requests/stories";
import Modal from "../../components/Modal";

export default function StoriesList(props) {
  const Router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState();
  const [sucessModal, setSucessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [storiesList, setStoriesList] = useState(props.content);
  const token = props.cookies.userToken;

  function AddNew() {
    Router.push("/stories/new");
  }

  async function deleteStory(storyId) {
    const response = await deleteStories(storyId, token);

    if (response.status === 200) {
      {
        setSucessModal(true);
      }
    } else {
      {
        setErrorModal(true);
      }
    }
  }

  async function getStoriesList() {
    const content = await getStories(token);
    setStoriesList(content);
    setSucessModal(false);
    setErrorModal(false);
  }

  function editStory(storyId) {
    Router.push(`/stories/${storyId}`);
  }

  async function searchStoriesByCategory() {
    if (currentCategory !== "Todas") {
      const newStoriesList = props.content.filter(
        (item) => item.category === currentCategory
      );

      setStoriesList(newStoriesList);
    } else {
      setStoriesList(props.content);
    }
  }

  async function searchStoriesByName(e) {
    const newStoriesList = props.content.filter((item) =>
      item.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    setStoriesList(newStoriesList);
  }

  useEffect(() => {
    if (currentCategory !== undefined) {
      searchStoriesByCategory();
    }
  }, [currentCategory]);

  return (
    <MainContent__section>
      <MainContent__container>
        <MainContentHeader data={props.pageTitle} onClick={AddNew} />
        <S.MainContent__filtersWrapper>
          <S.Label>
            Categorias
            <CategorySelect
              all="Todas"
              defaultValue={currentCategory}
              onChange={(e) => setCurrentCategory(e.currentTarget.value)}
            />
          </S.Label>

          <S.Label>
            Pesquisar Stories
            <TextField
              placeholder="Pesquisar Stories"
              onChange={(e) => searchStoriesByName(e)}
            >
              <Search width={24} color={theme.colors.gray} />
            </TextField>
          </S.Label>
        </S.MainContent__filtersWrapper>

        <S.MainContent__ContentWrapper>
          <S.Content__row>
            <S.Content__item className="row__header">Título</S.Content__item>
            <S.Content__item className="row__header">Categoria</S.Content__item>
            <S.Content__item className="row__header">Ações</S.Content__item>
          </S.Content__row>
          {storiesList && storiesList.length > 0 ? (
            storiesList.map((content) => {
              return (
                <S.Content__row key={content.id}>
                  <S.Content__item>{content.title}</S.Content__item>
                  <S.Content__item>{content.category}</S.Content__item>
                  <S.Content__item>
                    <S.Content__buttonWrapper>
                      <S.Content__button onClick={() => editStory(content.id)}>
                        <Edit width={24} color={theme.colors.yellow} />
                      </S.Content__button>

                      <S.Content__button
                        onClick={() => deleteStory(content.id)}
                      >
                        <Trash width={24} color={theme.colors.pink} />
                      </S.Content__button>
                    </S.Content__buttonWrapper>
                  </S.Content__item>
                </S.Content__row>
              );
            })
          ) : (
            <S.NotFound>Nada encontrado</S.NotFound>
          )}
        </S.MainContent__ContentWrapper>

        {sucessModal && (
          <Modal
            title="Story removido!"
            onClickConfirm={() => getStoriesList()}
          >
            <CheckCircle width={40} height={40} color={theme.colors.yellow} />
          </Modal>
        )}
        {errorModal && (
          <Modal
            title="Oops. Há algo errado."
            onClickCancel={() => getStoriesList()}
          >
            <AlertCircle width={40} height={40} color={theme.colors.pink} />
          </Modal>
        )}
      </MainContent__container>
    </MainContent__section>
  );
}
