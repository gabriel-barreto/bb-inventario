import React, { useState } from 'react';

import { Input } from '../../../components';

import * as S from './styled';

type Props = {
  visible: boolean;
  onSubmit: (code: string) => void;
  onCancel: () => void;
};

export default function Prompt({ visible, onSubmit, onCancel }: Props) {
  const [code, setCode] = useState('');

  function onCloseHandler() {
    console.tron.log('Cancel pressed');
    onCancel();
  }

  function onSubmitHandler() {
    console.tron.log('Submit pressed');

    if (code) return onSubmit(code);
    return null;
  }

  return (
    <S.Prompt
      animationType="fade"
      visible={visible}
      hardwareAccelerated
      transparent
      onRequestClose={onCloseHandler}
    >
      <S.Centered>
        <S.Body>
          <S.Title>Inserir Código Manualmente</S.Title>
          <Input
            label="Código do Item:"
            placeholder="Exemplo: 123456"
            autocompleteType="number"
            keyboardType="number-pad"
            value={code}
            autoFocus
            onChange={(value) => setCode(value)}
          />
          <S.Actions>
            <S.Cancel onPress={onCloseHandler}>
              <S.CancelLabel>Cancelar</S.CancelLabel>
            </S.Cancel>
            <S.Submit onPress={onSubmitHandler}>
              <S.SubmitLabel>Continuar</S.SubmitLabel>
            </S.Submit>
          </S.Actions>
        </S.Body>
      </S.Centered>
    </S.Prompt>
  );
}
