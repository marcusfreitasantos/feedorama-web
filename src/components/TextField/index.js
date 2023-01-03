import React, { useState } from "react";
import * as S from "./styles";
import { Eye, EyeOff } from "react-feather";
import theme from "../../styles/theme";

export default function TextField({
  placeholder,
  children,
  value,
  onChange,
  type,
  onBlur,
}) {
  const [showUserPass, setShowUserPass] = useState(false);

  function showPassword() {
    setShowUserPass(true);
  }

  function hidePassword() {
    setShowUserPass(false);
  }

  return (
    <S.InputArea>
      <S.Icon>{children}</S.Icon>
      <S.TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={showUserPass ? "text" : type}
        onBlur={onBlur}
      />

      {type === "password" && (
        <>
          {showUserPass ? (
            <S.Icon onClick={hidePassword}>
              <EyeOff width={24} color={theme.colors.pink} />
            </S.Icon>
          ) : (
            <S.Icon onClick={showPassword}>
              <Eye width={24} color={theme.colors.pink} />
            </S.Icon>
          )}
        </>
      )}
    </S.InputArea>
  );
}
