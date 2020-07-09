import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  failToRemoveWarning,
  successRemovedWarning,
  removeConfirmation,
} from '../../../constants';
import { $items } from '../../../services';

import * as S from './styled';

type Route = {
  params: {
    itemId: string;
  };
};

export default function DeleteButton() {
  const navigator = useNavigation();
  const { params } = useRoute() as Route;
  const [loading, setLoading] = useState(false);

  function removeItem() {
    setLoading(true);
    $items
      .remove(params.itemId)
      .then(() => {
        navigator.navigate('List', { message: successRemovedWarning });
      })
      .catch(() => {
        Alert.alert('Erro Inesperado!', failToRemoveWarning);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onPress() {
    Alert.alert('Atenção!', removeConfirmation, [
      { text: 'Continuar', onPress: removeItem },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  }

  if (loading) {
    return (
      <S.Container>
        <ActivityIndicator color="#fff" size="small" />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.DeleteButton onPress={onPress}>
        <S.Icon>
          <MaterialIcons name="delete" size={24} />
        </S.Icon>
      </S.DeleteButton>
    </S.Container>
  );
}
