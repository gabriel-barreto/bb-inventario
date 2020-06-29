import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styled';

type Props = {
  code: string;
  sector: string;
  title: string;
  onPress: () => void;
};

export default function Item({ code, sector, title, onPress }: Props) {
  return (
    <S.Item onPress={onPress}>
      <S.Container>
        <S.Body>
          <S.Title>{title}</S.Title>
          <S.Details>
            <S.Detail>Cod.: {code}</S.Detail>
            <S.Detail>Setor: {sector}</S.Detail>
          </S.Details>
        </S.Body>
        <S.Icon>
          <MaterialIcons name="chevron-right" size={24} />
        </S.Icon>
      </S.Container>
    </S.Item>
  );
}
