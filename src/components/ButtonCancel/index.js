import React from "react";
import * as S from "./style";

export default function ButtonCancel({ children, onClick, buttonActive }) {
  return (
    <S.Button onClick={onClick} buttonActive={buttonActive}>{children}</S.Button>
  )
}
