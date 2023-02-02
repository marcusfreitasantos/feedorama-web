import styled, { css } from "styled-components";

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    border: none;
    font-size: 1rem;
    box-sizing: border-box;
    margin: 10px 0;
    resize: vertical;
  `}
`;
