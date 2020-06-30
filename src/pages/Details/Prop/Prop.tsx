import React from 'react';

import * as S from './styled';

type Props = {
  label: string;
  value: string;
};

export default function Prop({ label, value }: Props) {
  return (
    <S.Prop>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.Prop>
  );
}
