import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { codeAlreadyTakenWarning } from '../../constants';

import * as S from './styled';
import Prompt from './Prompt';

type ScannedCode = {
  type: string;
  data: string;
};

type Route = {
  params: {
    codes: string[];
  };
};

export default function ReaderPage() {
  const [hasPermission, setPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState<Boolean | String>(false);
  const [manual, setManual] = useState(false);
  const { params } = useRoute() as Route;
  const navigator = useNavigation();

  function checkNewCode(code: string) {
    if (params.codes.includes(code)) {
      Alert.alert('Atenção', codeAlreadyTakenWarning);
      return;
    }

    navigator.navigate('Form', { code });
  }

  function onCodeScanned({ data }: ScannedCode) {
    if (scanned) return;
    setScanned(data);
  }

  function onReadAgainPress() {
    setScanned(false);
  }

  function onContinuePress() {
    checkNewCode(String(scanned));
  }

  function onPromptCloses() {
    setManual(false);
  }

  function onPromptSubmit(code: string) {
    setManual(false);
    checkNewCode(code);
  }

  navigator.setOptions({
    title: 'Registrar Item',
    headerRight: function HeaderRight() {
      return (
        <S.HeaderButton onPress={() => setManual(true)}>
          <Text>
            <MaterialIcons name="keyboard" color="#fff" size={24} />
          </Text>
        </S.HeaderButton>
      );
    },
  });

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ granted }) => {
      setPermission(granted);
    });
  }, []);

  if (hasPermission === null) {
    return (
      <S.Container>
        <S.Message>Solicitando permissão para utilizar a câmera</S.Message>
      </S.Container>
    );
  }

  if (hasPermission === false) {
    return (
      <S.Container>
        <S.Warning>Sem permissão para utilizar a câmera</S.Warning>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Scanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={onCodeScanned}
        needsOffscreenAlphaCompositing
      />

      {!scanned ? (
        <S.Indicator source={require('../../assets/reader-indicator.png')} />
      ) : null}

      {scanned && <S.ActionsOverlay />}

      <Prompt
        visible={manual}
        onSubmit={onPromptSubmit}
        onCancel={onPromptCloses}
      />

      <S.Actions>
        {scanned && (
          <>
            <S.Reset onPress={onReadAgainPress}>
              <S.ResetLabel>Ler novamente!</S.ResetLabel>
            </S.Reset>
            <S.Next onPress={onContinuePress}>
              <S.NextLabel>Continuar</S.NextLabel>
            </S.Next>
          </>
        )}
      </S.Actions>
    </S.Container>
  );
}
