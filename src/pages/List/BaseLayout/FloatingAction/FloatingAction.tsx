import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';

type Props = {
  codes: string[];
};

export default function FloatingAction({ codes }: Props) {
  const navigator = useNavigation();

  function onPress() {
    navigator.navigate('Reader', { codes });
  }

  return (
    <S.ActionFloating underlayColor="#1b447e" onPress={onPress}>
      <S.ActionIcon>
        <MaterialIcons name="add" size={32} />
      </S.ActionIcon>
    </S.ActionFloating>
  );
}
