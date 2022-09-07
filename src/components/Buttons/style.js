import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.pink};
    border-radius: 50px;
    padding: 10px;
    margin-top: 5px;
    width: 50%;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.pinkDark};
    }
  `}
`;
