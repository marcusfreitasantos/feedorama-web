import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.pink};
    border-radius: 50px;
    padding: 8px 32px;
    margin-top: 5px;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: ${theme.colors.pinkDark};
    }
  `}
`;
