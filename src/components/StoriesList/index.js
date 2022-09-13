import React from "react";
import * as S from "./style";

import { Trash, Edit } from "react-feather";
import theme from "../../styles/theme";
import { MainContent__container, MainContent__section } from "../../styles/global";
import { useRouter } from "next/router";
import MainContentHeader from "../MainContentHeader";

export default function StoriesList(props) {
  const Router = useRouter()

  function AddNew(){
    Router.push('/stories/new')
  }
  return (
    <MainContent__section>
      <MainContent__container>        
        <MainContentHeader data={props.pageTitle} onClick={AddNew}/>
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
      </MainContent__container>
    </MainContent__section>
  );
}
