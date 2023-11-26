import * as S from "./style";
import { Box } from "react-feather";
import theme from "../../styles/theme";

export default function CategorySelect({
  onChange,
  defaultValue,
  all,
  categoriesList,
}) {
  return (
    <S.InputArea>
      <S.Icon>
        <Box width={24} color={theme.colors.gray} />
      </S.Icon>
      <S.Select
        value={defaultValue ? defaultValue : "default"}
        onChange={onChange}
      >
        <option value="default" disabled>
          Escolha uma categoria
        </option>

        {all && <option value={all}>Todas</option>}

        {categoriesList &&
          categoriesList.map((item, index) => {
            return (
              <option key={`option_${item.category + index}`} value={item.slug}>
                {item.category}
              </option>
            );
          })}
      </S.Select>
    </S.InputArea>
  );
}
