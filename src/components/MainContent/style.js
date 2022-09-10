import styled, { css } from "styled-components";

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
`;

export const MainContent__header = styled.div`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.pinkDark};
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 40px;
  `}
`;

export const MainContent__filtersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MainContent__segments = styled.select`
  ${({ theme }) => css`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.gray};
    margin-top: 10px;
  `}
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
    font-size: 1.2rem;
    color: ${theme.colors.gray};
    padding: 10px;
    width: 100%;
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
