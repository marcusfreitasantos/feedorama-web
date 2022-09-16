import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
    border-radius: 50px;
    padding: 8px 32px;
    margin-top: 5px;
    color: ${theme.colors.gray};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => props.buttonActive === false ? '0.5' : '1'};
    pointer-events: ${(props) => props.buttonActive === false ? 'none' : 'auto'} ;

    :hover {
      background-color: ${theme.colors.grayDark};
    }
  `}
`;
