import React from 'react'
import { PageTitle } from "../../styles/global";
import Button from "../Buttons";
import { Plus } from "react-feather";
import * as S from "./style";

export default function MainContentHeader(props) {
  return (
    <S.MainContent__header>
        <PageTitle>{props.data}</PageTitle>
        {props.onClick &&
          <Button onClick={props.onClick}>
            <Plus width={24} /> Add Novo{" "}
          </Button>
        }
    </S.MainContent__header>
  )
}
