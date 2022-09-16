import React from "react";
import * as S from "./styles";

export default function TextField({
  placeholder,
  children,
  value,
  onChange,
  type,
  onBlur,
}) {
  return (
    <S.InputArea>
      <S.Icon>{children}</S.Icon>
      <S.TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
    </S.InputArea>
  );
}
