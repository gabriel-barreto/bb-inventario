import React from 'react';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styled';

type Route = {
  params: {
    itemId: string;
  };
};

export default function DeleteButton() {
  const { params } = useRoute() as Route;

  function onPress() {
    console.tron.log('Remove Item', params.itemId);
  }

  return (
    <S.DeleteButton onPress={onPress}>
      <S.Icon>
        <MaterialIcons name="delete" size={24} />
      </S.Icon>
    </S.DeleteButton>
  );
}
