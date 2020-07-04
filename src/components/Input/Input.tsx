import React from 'react';

import * as S from './styled';

type Props = {
  autocompleteType: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  ...rest
}: Props) {
  return (
    <S.Input>
      <S.Label>{label}</S.Label>
      <S.Field
        placeholder={placeholder}
        placeholderTextColor="#828282"
        value={value}
        onChangeText={onChange}
        {...rest}
      />
    </S.Input>
  );
}
