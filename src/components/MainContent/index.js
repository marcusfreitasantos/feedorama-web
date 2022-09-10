import React from "react";
import * as S from "./style";
import { PageTitle } from "../../styles/global";
import Button from "../Buttons";
import { Trash, Edit, Plus } from "react-feather";
import theme from "../../styles/theme";

export default function MainContent(props) {
  console.log(props.content);
  return (
    <S.MainContent__section>
      <S.MainContent__container>
        <S.MainContent__header>
          <PageTitle>{props.pageTitle}</PageTitle>
          <Button>
            <Plus width={24} /> Add Novo{" "}
          </Button>
        </S.MainContent__header>

        <S.MainContent__filtersWrapper>
          <S.Label>
            Segmentos
            <S.MainContent__segments defaultValue="default">
              <option value="default" disabled>
                Escolha um segmento
              </option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </S.MainContent__segments>
          </S.Label>

          <S.Label>
            Pesquisar Content
            <S.MainContent__search
              type="text"
              placeholder="Pesquisar Content"
            />
          </S.Label>
        </S.MainContent__filtersWrapper>

        <S.MainContent__ContentWrapper>
          {props.content &&
            props.content.map((content, index) => {
              return (
                <S.Content__row key={content.id}>
                  <S.Content__item>{index + 1}</S.Content__item>
                  <S.Content__item>{content.title}</S.Content__item>
                  <S.Content__item>{content.category}</S.Content__item>
                  <S.Content__buttonWrapper>
                    <S.Content__button>
                      <Edit width={24} color={theme.colors.yellow} />
                    </S.Content__button>

                    <S.Content__button>
                      <Trash width={24} color={theme.colors.pink} />
                    </S.Content__button>
                  </S.Content__buttonWrapper>
                </S.Content__row>
              );
            })}
        </S.MainContent__ContentWrapper>
      </S.MainContent__container>
    </S.MainContent__section>
  );
}
