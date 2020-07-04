import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styled';

type Props = {
  onPress: () => void;
};

export default function SearchButton({ onPress }: onPress) {
  return (
    <S.SearchButton onPress={onPress} activeOpacity={0.64}>
      <S.Icon>
        <MaterialIcons name="search" size={24} />
      </S.Icon>
    </S.SearchButton>
  );
}
