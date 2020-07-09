import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// ==> Base
const ActionLabel = styled.Text`
  font-size: ${({ theme }) => theme.sizes.normal};
  text-align: center;
  text-transform: uppercase;
`;

const Action = styled(RectButton)`
  align-items: center;
  height: 48px;
  justify-content: center;
  width: 100%;
`;
// End: Base

export const Container = styled.View`
  align-items: center;
  background-color: #000;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const HeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 16px 0 0;
`;

export const Scanner = styled(BarCodeScanner)`
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.secondary.hex()};
  font-size: ${({ theme }) => theme.sizes.strong};
  text-align: center;
`;

export const Warning = styled(Message)`
  color: ${({ theme }) => theme.colors.error.hex()};
`;

export const Actions = styled.View`
  align-items: center;
  bottom: 32px;
  justify-content: center;
  padding: 0 32px;
  position: absolute;
  width: 100%;
`;

export const Reset = styled(Action)`
  background-color: ${({ theme }) => theme.colors.lightest.hex()};
`;

export const ResetLabel = styled(ActionLabel)`
  color: ${({ theme }) => theme.colors.secondary.hex()};
`;

export const NextLabel = styled(ActionLabel)`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;

export const Next = styled(Action)`
  background-color: ${({ theme }) => theme.colors.secondary.hex()};
  margin: 10px 0 0 0;
`;

export const ActionsOverlay = styled.View`
  background-color: #000;
  height: 100%;
  width: 100%;
`;

export const Indicator = styled.Image`
  height: 72%;
  resize-mode: contain;
  width: 72%;
`;
