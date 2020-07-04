import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import * as S from './styled';

type Props = {
  onInput: (input: string) => void;
  onHide: () => void;
};

export default function SearchForm({ onInput, onHide }: Props) {
  return (
    <S.SearchForm>
      <S.Field autoFocus onChangeText={onInput} />
      <S.HideButton onPress={onHide}>
        <S.ButtonIcon>
          <MaterialIcons name="close" size={24} />
        </S.ButtonIcon>
      </S.HideButton>
    </S.SearchForm>
  );
}
