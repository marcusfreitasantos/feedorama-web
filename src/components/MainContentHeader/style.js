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

export const Button__wrapper = styled.div`
  display: flex;
  gap: 20px;

  svg {
    margin-right: 5px;
  }
`;

export const UpoadFile = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
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
    opacity: ${(props) => (props.buttonActive === false ? "0.5" : "1")};
    pointer-events: ${(props) =>
      props.buttonActive === false ? "none" : "auto"};

    :hover {
      background-color: ${theme.colors.yellowDark};
    }

    input {
      display: none;
    }
  `}
`;
