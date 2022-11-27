import React, { useState, useEffect } from "react";

import * as S from "./style";
import { Users } from "react-feather";
import theme from "../../styles/theme";

export default function Select({
  defaultOption,
  onChange,
  defaultValue,
  optionsList,
}) {
  return (
    <S.InputArea>
      <S.Icon>
        <Users width={24} color={theme.colors.gray} />
      </S.Icon>
      <S.Select
        value={defaultValue ? defaultValue : "default"}
        onChange={onChange}
      >
        <option value="default" disabled>
          {defaultOption}
        </option>

        {optionsList &&
          optionsList.map((item, index) => {
            return (
              <option key={`option_${item.value + index}`} value={item.value}>
                {item.option}
              </option>
            );
          })}
      </S.Select>
    </S.InputArea>
  );
}
