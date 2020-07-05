import React from 'react';

import * as S from './styled';

type Props = {
  label: string;
};

export default function Loader({ label }: Props) {
  return (
    <S.Loader>
      <S.Spinner size="large" color="#23569C" />
      <S.Label>{label}</S.Label>
    </S.Loader>
  );
}

Loader.defaultProps = { label: 'Carregando...' };
