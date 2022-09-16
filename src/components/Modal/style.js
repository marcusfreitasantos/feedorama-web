import styled, {css} from "styled-components";

export const Modal__wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`
export const Modal__container = styled.div`
${({theme}) => css`
    background-color: ${theme.colors.white};
    width: 400px;
    height: 200px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px  0 rgba(0,0,0,0.1);
    border-radius: 10px;
`}

`
export const Modal__title = styled.span`
${({theme}) => css`
    color: ${theme.colors.pink};
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.4rem;
`}
`
export const Modal__buttonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const Modal__icon = styled.div``


