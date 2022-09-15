import React, {useState} from 'react'

import categories from '../../mocks/categories'
import * as S from './style'
import { Box } from "react-feather";
import theme from "../../styles/theme";



export default function CategorySelect({onChange}) {
  const categoriesList = categories.categories

  return (
    <S.InputArea>
      <S.Icon><Box width={24} color={theme.colors.gray} /></S.Icon>
      <S.Select defaultValue="default" onChange={onChange}>
        <option value="default" disabled>Escolha uma categoria</option>
        {categoriesList && categoriesList.map((item, index) => {
          return (
            <option key={`option_${item.slug + index}`} value={item.name}>{item.name}</option>
          )
        })}
      </S.Select>
    </S.InputArea>
 
  )
}
