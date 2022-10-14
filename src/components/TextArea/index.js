import React from 'react'
import * as S from './style'

export default function TextArea({onBlur, onChange, value, placeholder}) {
  return (
    <S.TextArea placeholder={placeholder} rows={6} maxLength={600} value={value} onChange={onChange} onBlur={onBlur} />
  )
}
