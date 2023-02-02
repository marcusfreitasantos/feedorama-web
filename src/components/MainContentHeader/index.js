import React from "react";
import { PageTitle } from "../../styles/global";
import Button from "../Buttons";
import { Plus, Upload } from "react-feather";
import * as S from "./style";

export default function MainContentHeader({ data, onClick, onChange }) {
  return (
    <S.MainContent__header>
      <PageTitle>{data}</PageTitle>
      <S.Button__wrapper>
        {onChange && (
          <S.UpoadFile htmlfor="upload">
            <Upload width={24} /> Importar CSV
            <input accept=".csv" id="upload" type="file" onChange={onChange} />
          </S.UpoadFile>
        )}

        {onClick && (
          <Button onClick={onClick}>
            <Plus width={24} /> Add Novo
          </Button>
        )}
      </S.Button__wrapper>
    </S.MainContent__header>
  );
}
