import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.pink};
    width: 15%;
    height: 100vh;
    box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    position: sticky;
    top: 0;
  `}
`;

export const Sidebar__container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.pinkDark};
    width: 100%;
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid ${theme.colors.white};
  `}
`;

export const Logo = styled.img`
  max-width: 160px;
`;

export const NavMenu = styled.ul`
  padding: 0;
  width: 100%;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    padding: 10px 0;
    margin: 20px 0;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    transition: 0.3s;

    :hover {
      opacity: 0.5;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.3s;
      margin-left: 10px;
    }
  `}
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`;
export const UserInfo__avatar = styled.img`
  width: 100%;
  max-width: 100px;
  border-radius: 50px;
  border: 3px solid white;
`;

export const UserInfo__name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
  `}
`;

export const UserInfo__email = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1rem;
  `}
`;
