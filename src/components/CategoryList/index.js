import React from 'react'
import MainContentHeader from '../MainContentHeader'
import { MainContent__container, MainContent__section } from "../../styles/global";
import { Trash } from "react-feather";
import theme from "../../styles/theme";

import * as S from './style'


export default function CategoryList(props) {
  return (
    <MainContent__section>
      <MainContent__container>
        <MainContentHeader data={props.pageTitle} />


        <S.MainContent__ContentWrapper>
          {props.categoriesList &&
            props.categoriesList.map((item, index) => {
              return (
                <S.Content__row key={item.category}>
                  <S.Content__item>{index + 1}</S.Content__item>
                  <S.Content__item>{item.category}</S.Content__item>
                  <S.Content__buttonWrapper>
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
  )
}
