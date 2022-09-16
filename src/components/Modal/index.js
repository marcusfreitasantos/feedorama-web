import React from 'react'
import * as S from './style'
import Button from '../Buttons'
import ButtonCancel from '../ButtonCancel'

export default function Modal({title, onClickConfirm, onClickCancel, children}) {
  return (
    <S.Modal__wrapper>
        <S.Modal__container>
            <S.Modal__icon>{children}</S.Modal__icon>
            <S.Modal__title>{title}</S.Modal__title>
            <S.Modal__buttonsWrapper>
                {onClickConfirm && <Button onClick={onClickConfirm}>Confirmar</Button>}
                {onClickCancel && <ButtonCancel onClick={onClickCancel}>Cancelar</ButtonCancel>}
            </S.Modal__buttonsWrapper>
        </S.Modal__container>
    </S.Modal__wrapper>
  )
}
