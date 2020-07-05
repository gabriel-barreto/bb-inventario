import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';

export default function FloatingAction() {
  const navigator = useNavigation();

  function onPress() {
    navigator.navigate('Reader');
  }

  return (
    <S.ActionFloating underlayColor="#1b447e" onPress={onPress}>
      <S.ActionIcon>
        <MaterialIcons name="add" size={32} />
      </S.ActionIcon>
    </S.ActionFloating>
  );
}
