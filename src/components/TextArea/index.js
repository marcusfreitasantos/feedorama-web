import React from "react";
import * as S from "./style";

export default function TextArea({ onBlur, onChange, value, placeholder }) {
  return (
    <S.TextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={15}
    />
  );
}
