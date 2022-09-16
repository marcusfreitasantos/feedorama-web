import styled, { css } from "styled-components";


export const MainContent__filtersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MainContent__search = styled.input`
  ${({ theme }) => css`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.gray};
    margin-top: 10px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;
    color: ${theme.colors.gray};
  `}
`;

export const MainContent__ContentWrapper = styled.div`
  padding: 20px 0;
`;

export const Content__row = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;

export const Content__item = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.gray};
    padding: 10px;
    width: 200px;
  `}
`;

export const Content__buttonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content__button = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.5;
  }
`;
