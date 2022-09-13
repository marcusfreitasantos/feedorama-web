import styled, { css } from "styled-components";

export const MainContent__header = styled.div`
${({ theme }) => css`
  border-bottom: 2px solid ${theme.colors.pinkDark};
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 40px;
`}
`;