import styled, { css } from "styled-components";

export const InputArea = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin: 10px 0;
    height: 30px;
  `}
`;

export const TextInput = styled.input`
  ${({ theme }) => css`
    margin-left: 15px;
    color: ${theme.colors.grayDark};
    border: none;
    background: none;
    padding: 12px;
    width: 100%;

    :focus-visible {
      outline-color: ${theme.colors.pink};
    }

    :focus {
      outline-color: ${theme.colors.pink};
    }
  `}
`;

export const Icon = styled.div`
  cursor: pointer;
`;
