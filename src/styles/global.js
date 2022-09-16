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

  input, textarea, select, option{
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
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

export const MainContent__section = styled.div`
  background: #eee;
  width: 85%;
  margin-left: auto;
  padding: 40px;
`;

export const MainContent__container = styled.div`
  padding: 40px;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
`;
