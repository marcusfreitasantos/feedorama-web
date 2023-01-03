import React from "react";
import * as S from "./styles";
import { Calendar } from "react-feather";
import theme from "../../styles/theme";

export default function TextField({ value, onChange, onBlur }) {
  const currentDate = new Date();

  const minDate = `${currentDate.getFullYear()}-0${
    currentDate.getMonth() + 1
  }-0${currentDate.getDate()}`;

  return (
    <S.InputArea>
      <S.Icon>
        <Calendar width={24} color={theme.colors.gray} />
      </S.Icon>
      <S.TextInput
        min={minDate}
        value={value}
        onChange={onChange}
        type="date"
        onBlur={onBlur}
      />
    </S.InputArea>
  );
}
