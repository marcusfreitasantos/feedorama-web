import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.pink};
    width: 10%;
    height: 100vh;
    box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: fixed;
    padding: 20px;
  `}
`;

export const Sidebar__container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 100%;
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

export const UserInfoWrapper = styled.div``;
export const UserInfo__avatar = styled.div``;

export const UserInfo__name = styled.div``;

export const UserInfo__email = styled.div``;
