import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.pink};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Container = styled.div`
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 400px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    box-shadow: 0 10px 40px 0 rgba(182, 23, 22, 0.5);
  `}
`;

export const Form = styled.form`
  width: 100%;
`;

export const Form__title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.pink};
    text-align: center;
    font-size: 2rem;
    margin: 0 0 20px 0;
  `}
`;

export const Logo = styled.img``;
