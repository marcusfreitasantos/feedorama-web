import React from 'react'
import * as S from './style'

export default function TextArea({onBlur, onChange, value}) {
  return (
    <S.TextArea placeholder='Digite o conteúdo' rows={6} maxLength={600} value={value} onChange={onChange} onBlur={onBlur} />
  )
}
