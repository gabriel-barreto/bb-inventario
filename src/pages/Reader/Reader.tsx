import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';

type ScannedCode = {
  type: string;
  data: string;
};

export default function ReaderPage() {
  const [hasPermission, setPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState<Boolean>(false);
  const navigator = useNavigation();

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ granted }) => {
      setPermission(granted);
    });
  }, []);

  function onCodeScanned({ type, data }: ScannedCode) {
    if (scanned) return;

    setScanned(true);
    console.tron.log({ type, data });
  }

  function onReadAgainPress() {
    setScanned(false);
  }

  navigator.setOptions({ title: 'Registrar Item' });

  if (hasPermission === null)
    return (
      <S.Container>
        <S.Message>Solicitando permissão para utilizar a câmera</S.Message>
      </S.Container>
    );

  if (hasPermission === false)
    return (
      <S.Container>
        <S.Warning>Sem permissão para utilizar a câmera</S.Warning>
      </S.Container>
    );

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

      <S.Actions>
        {scanned && (
          <>
            <S.Reset onPress={onReadAgainPress}>
              <S.ResetLabel>Ler novamente!</S.ResetLabel>
            </S.Reset>
            <S.Next onPress={() => {}}>
              <S.NextLabel>Continuar</S.NextLabel>
            </S.Next>
          </>
        )}
      </S.Actions>
    </S.Container>
  );
}
