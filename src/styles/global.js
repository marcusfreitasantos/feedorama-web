import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;   
    box-sizing: border-box;
  }

  #__next{
    display: flex;
  }
`;

export default GlobalStyle;

export const PageTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.pinkDark};
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  `}
`;
